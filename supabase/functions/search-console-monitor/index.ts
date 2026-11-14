import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3';
import { authenticateCronRequest } from '../_shared/cron-auth.ts';
import { TARGET, PATHS, resolve, indexingState } from './model.ts';
const schema = z.object({action:z.enum(['read','refresh','inspect','select','scheduled']), siteUrl:z.string().max(500).optional(), path:z.enum(PATHS as [string,...string[]]).optional()}).strict();
class ProviderError extends Error { constructor(public status:number, public details:string, public retry:string|null) { super(details); } }
Deno.serve(async req => {
  const json = (body:unknown,status=200) => new Response(JSON.stringify(body),{status,headers:{...corsHeaders,'Content-Type':'application/json'}});
  if(req.method==='OPTIONS') return new Response('ok',{headers:corsHeaders});
  const db = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
  try {
    const parsed=schema.safeParse(await req.json());
    if(!parsed.success) return json({error:'Pedido inválido'},400);
    const input=parsed.data;
    if(input.action==='scheduled') { const denied=authenticateCronRequest(req); if(denied) return json({error:'Não autorizado'},denied.status); }
    else {
      const token=req.headers.get('Authorization')?.replace(/^Bearer /,'');
      if(!token) return json({error:'Entre para acessar o painel'},401);
      const {data:{user},error}=await db.auth.getUser(token);
      if(error || !user) return json({error:'Sessão inválida'},401);
      const {data:role}=await db.from('user_roles').select('id').eq('user_id',user.id).eq('role','admin').maybeSingle();
      if(!role) return json({error:'Esta conta não tem acesso ao painel'},403);
    }
    const {data:snapshot,error:readError}=await db.from('search_console_snapshot').select('*').eq('id','site').single();
    if(readError) throw readError;
    if(input.action==='read') return json(snapshot);
    if(snapshot.retry_after && new Date(snapshot.retry_after)>new Date()) return json({error:'Google limitou as consultas. Aguarde o horário indicado.',retry_after:snapshot.retry_after},429);
    const key=Deno.env.get('GOOGLE_SEARCH_CONSOLE_API_KEY'); const lovableKey=Deno.env.get('LOVABLE_API_KEY');
    if(!key || !lovableKey) return json({error:'Conexão Google indisponível'},503);
    async function google(path:string, body?:unknown) {
      const response=await fetch(`https://connector-gateway.lovable.dev/google_search_console${path}`,{method:body?'POST':'GET',headers:{Authorization:`Bearer ${lovableKey}`,'X-Connection-Api-Key':key as string,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});
      if(!response.ok) { const details=await response.text(); console.error('Google',response.status,details); throw new ProviderError(response.status,details,response.headers.get('Retry-After')); }
      return await response.json();
    }
    const sites=await google('/webmasters/v3/sites');
    const selection=resolve(sites.siteEntry ?? [],input.action==='select'?input.siteUrl:snapshot.selected_site);
    if(selection.status!=='selected') {
      await db.from('search_console_snapshot').update({last_error:{error:selection.status},selected_site:null}).eq('id','site');
      return json(selection);
    }
    const siteUrl=selection.siteUrl as string;
    const payload=snapshot.payload ?? {};
    if(input.action==='inspect') {
      if(!input.path) return json({error:'Selecione uma página'},400);
      const result=await google('/v1/urlInspection/index:inspect',{inspectionUrl:new URL(input.path,TARGET).href,siteUrl});
      const inspection=result.inspectionResult ?? {};
      const index=inspection.indexStatusResult ?? {};
      payload.pages={...(payload.pages ?? {}),[input.path]:{...index,state:indexingState(index),inspectionUrl:inspection.inspectionResultLink,checkedAt:new Date().toISOString()}};
    } else {
      const sitemaps=await google(`/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`);
      payload.sitemaps=sitemaps.sitemap ?? []; payload.sitemapCheckedAt=new Date().toISOString();
    }
    const update={selected_site:siteUrl,payload,updated_at:new Date().toISOString(),last_error:null,retry_after:null};
    const {error:saveError}=await db.from('search_console_snapshot').update(update).eq('id','site');
    if(saveError) throw saveError;
    return json({...snapshot,...update});
  } catch(error) {
    if(error instanceof ProviderError) {
      const retrySeconds=Number(error.retry); const retryDate=error.retry && !Number.isFinite(retrySeconds)?Date.parse(error.retry):NaN;
      const retry_after=error.status===429?new Date(Number.isFinite(retryDate)?retryDate:Date.now()+(Number.isFinite(retrySeconds)&&retrySeconds>0?retrySeconds:300)*1000).toISOString():null;
      await db.from('search_console_snapshot').update({last_error:{status:error.status,details:error.details},retry_after}).eq('id','site');
      return json({error:'Falha na consulta ao Google',status:error.status,details:error.details,retry_after},error.status);
    }
    console.error(error); return json({error:error instanceof Error?error.message:'Não foi possível consultar os dados'},500);
  }
});