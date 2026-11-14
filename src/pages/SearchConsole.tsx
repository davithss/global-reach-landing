import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { FunctionsHttpError } from '@supabase/supabase-js';
import { Helmet } from 'react-helmet-async';
import { Activity, AlertTriangle, ArrowLeft, CheckCircle2, ExternalLink, Globe, LogOut, RefreshCw, Search, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';
import pages from '@/lib/seo-pages.json';

type PageResult = {state:string; coverageState?:string; pageFetchState?:string; robotsTxtState?:string; indexingState?:string; lastCrawlTime?:string; checkedAt?:string; googleCanonical?:string; userCanonical?:string; inspectionUrl?:string};
type Sitemap = {path:string; errors?:string; warnings?:string; isPending?:boolean; lastDownloaded?:string; lastSubmitted?:string; contents?:{submitted?:string}[]};
type Snapshot = {selected_site?:string; updated_at?:string; retry_after?:string; last_error?:{error?:string;status?:number;details?:string}; payload?:{pages?:Record<string,PageResult>;sitemaps?:Sitemap[];sitemapCheckedAt?:string}};
const date = (value?:string) => value ? new Date(value).toLocaleString('pt-BR') : 'Ainda não consultado';
const stateName:Record<string,string>={indexed:'Indexada',not_indexed:'Não indexada',crawl_error:'Erro de rastreamento',unknown:'Sem informação'};
const paths=Object.keys(pages);

export default function SearchConsole() {
  const [user,setUser]=useState<User|null>(null);
  const [ready,setReady]=useState(false);
  const [snapshot,setSnapshot]=useState<Snapshot|null>(null);
  const [busy,setBusy]=useState('');
  const [error,setError]=useState('');
  const [candidates,setCandidates]=useState<string[]>([]);
  const [selection,setSelection]=useState('');
  const [name,setName]=useState('');
  const [profileSaved,setProfileSaved]=useState(false);
  const [filter,setFilter]=useState('all');
  async function request(action:string,extra:Record<string,string>={}) {
    setBusy(extra.path ?? action); setError('');
    try {
      const {data,error:failure}=await supabase.functions.invoke('search-console-monitor',{body:{action,...extra}});
      if(failure) {
        let message=failure.message;
        if(failure instanceof FunctionsHttpError) {
          const text=await failure.context.text();
          try { const detail=JSON.parse(text); message=detail.error + (detail.status===403?' — Confira o acesso da conta Google à propriedade.':'') + (detail.details?` (${detail.details})`:''); } catch { message=text; }
        }
        throw new Error(message);
      }
      if(data.status==='selection_required') { setCandidates(data.candidates);setSelection(''); }
      else if(data.status==='unavailable') setError('Nenhuma propriedade verificada cobre thiesse.com.br. Confira a conexão do Google.');
      else {setSnapshot(data);setCandidates([]);}
    } catch(e) { setError(e instanceof Error?e.message:'Consulta indisponível'); }
    finally {setBusy('');}
  }
  useEffect(()=>{
    const {data:{subscription}}=supabase.auth.onAuthStateChange((_event,session)=>{setUser(session?.user ?? null);setReady(true);});
    void supabase.auth.getUser().then(({data})=>{setUser(data.user);setReady(true);});
    return ()=>subscription.unsubscribe();
  },[]);
  useEffect(()=>{
    if(!user) {setSnapshot(null);return;}
    void request('read');
    void supabase.from('profiles').select('display_name').eq('id',user.id).maybeSingle().then(({data})=>setName(data?.display_name ?? ''));
  },[user?.id]);
  async function signIn(provider:'google'|'lovable') {
    setBusy('login');setError('');
    const result=await lovable.auth.signInWithOAuth(provider,{redirect_uri:`${window.location.origin}/painel-seo`});
    if(result.error) setError(result.error.message);
    setBusy('');
  }
  const inspected=snapshot?.payload?.pages ?? {};
  const sitemaps=snapshot?.payload?.sitemaps ?? [];
  const totalErrors=sitemaps.reduce((n,s)=>n+Number(s.errors ?? 0),0);
  const crawlErrors=paths.filter(p=>inspected[p]?.state==='crawl_error').length;
  const counts=[{label:'Indexadas',value:paths.filter(p=>inspected[p]?.state==='indexed').length,icon:CheckCircle2},{label:'Erros de rastreamento',value:crawlErrors,icon:AlertTriangle},{label:'Sem consulta',value:paths.filter(p=>!inspected[p]).length,icon:Search},{label:'Erros de sitemap',value:totalErrors,icon:Activity}];
  return <main className="min-h-screen bg-background text-foreground">
    <Helmet><title>Painel Search Console | TSoftwares</title><meta name="robots" content="noindex, nofollow"/><meta name="description" content="Painel privado de acompanhamento da indexação TSoftwares."/></Helmet>
    <header className="border-b border-border"><div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between gap-3"><a href="/" className="font-semibold text-lg inline-flex gap-3 items-center"><ArrowLeft size={18}/> TSoftwares</a><span className="text-muted-foreground text-sm flex items-center gap-2"><ShieldCheck size={16}/> Área privada</span>{user&&<Button variant="ghost" size="icon" title="Sair" onClick={()=>void supabase.auth.signOut()}><LogOut size={18}/></Button>}</div></header>
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="flex flex-wrap items-start justify-between gap-5 mb-8"><div><p className="text-accent text-sm mb-2">GOOGLE SEARCH CONSOLE</p><h1 className="text-3xl font-semibold">Indexação do site</h1><p className="text-muted-foreground mt-3 flex gap-2 items-center"><Globe size={16}/> thiesse.com.br · 6 páginas</p></div>{user&&<Button disabled={!!busy} onClick={()=>void request('refresh')}><RefreshCw size={16} className={busy==='refresh'?'animate-spin':''}/>Atualizar sitemap</Button>}</div>
      {error&&<div role="alert" className="mb-6 p-4 border border-destructive rounded-lg text-sm flex gap-3 items-start break-words"><AlertTriangle size={20} className="shrink-0 text-destructive"/><span className="min-w-0">{error}</span></div>}
      {!ready?<p className="text-muted-foreground">Carregando…</p>:!user?<section className="py-14 border-t border-border max-w-lg"><ShieldCheck className="text-accent mb-4" size={32}/><h2 className="text-xl font-semibold mb-6">Entrar no painel</h2><div className="flex flex-col sm:flex-row gap-3"><Button disabled={!!busy} onClick={()=>void signIn('google')}>Entrar com Google</Button><Button variant="outline" disabled={!!busy} onClick={()=>void signIn('lovable')}>Entrar com Lovable</Button></div></section>:<>
        {candidates.length>0&&<section className="border border-border p-5 mb-6 rounded-lg"><h2 className="font-semibold mb-3">Selecione a propriedade verificada</h2>{candidates.map(c=><label key={c} className="flex gap-3 items-center py-2 break-all"><input type="radio" name="property" value={c} checked={selection===c} onChange={()=>setSelection(c)}/>{c}</label>)}<Button className="mt-3" disabled={!selection||!!busy} onClick={()=>void request('select',{siteUrl:selection})}>Usar propriedade</Button></section>}
        {snapshot?.last_error&&<div className="mb-6 border border-destructive p-4 rounded-lg text-sm"><strong>Última atualização não concluída</strong><p className="mt-2 break-words">{snapshot.last_error.details ?? snapshot.last_error.error}</p>{snapshot.retry_after&&<p>Próxima tentativa após {date(snapshot.retry_after)}</p>}</div>}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">{counts.map(({label,value,icon:Icon})=><div key={label} className="border border-border bg-card rounded-lg p-5"><div className="flex items-center justify-between gap-2 text-muted-foreground text-sm"><span>{label}</span><Icon size={18}/></div><p className="text-3xl font-semibold mt-4">{value}<span className="text-sm text-muted-foreground font-normal">{label==='Erros de sitemap'?'':' / 6'}</span></p></div>)}</div>
        <div className="flex flex-wrap justify-between gap-3 items-center mb-5"><h2 className="text-xl font-semibold">Páginas públicas</h2><select aria-label="Filtrar páginas" className="bg-background border border-input rounded-md px-3 py-2 text-sm" value={filter} onChange={e=>setFilter(e.target.value)}><option value="all">Todas as páginas</option><option value="indexed">Indexadas</option><option value="not_indexed">Não indexadas</option><option value="crawl_error">Erros de rastreamento</option><option value="unknown">Sem informação</option></select></div>
        <div className="divide-y divide-border border-y border-border">{paths.filter(p=>filter==='all'||(inspected[p]?.state ?? 'unknown')===filter).map(path=>{const result=inspected[path];return <article key={path} className="py-5"><div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4"><div className="min-w-0"><a href={`https://thiesse.com.br${path}`} target="_blank" rel="noopener noreferrer" className="font-medium break-words inline-flex items-center gap-2">{path==='/'?'Página principal':path}<ExternalLink size={14} className="shrink-0"/></a><p className={`text-sm mt-2 ${result?.state==='crawl_error'?'text-destructive':result?.state==='indexed'?'text-accent':'text-muted-foreground'}`}>{stateName[result?.state ?? 'unknown']} {result?.coverageState&&`· ${result.coverageState}`}</p><p className="text-xs text-muted-foreground mt-2">Consulta: {date(result?.checkedAt)} · Último rastreamento: {date(result?.lastCrawlTime)}</p></div><Button size="sm" variant="outline" disabled={!!busy} onClick={()=>void request('inspect',{path})}><Search size={15}/>{busy===path?'Consultando…':'Consultar página'}</Button></div>{result&&<details className="mt-3 text-sm"><summary className="cursor-pointer text-muted-foreground">Detalhes do Google</summary><dl className="grid sm:grid-cols-2 gap-3 mt-3 text-sm break-all"><div><dt className="text-muted-foreground">Resposta de rastreamento</dt><dd>{result.pageFetchState ?? 'Não informado'}</dd></div><div><dt className="text-muted-foreground">Robots / permissão de indexação</dt><dd>{result.robotsTxtState ?? 'Não informado'} / {result.indexingState ?? 'Não informado'}</dd></div><div><dt className="text-muted-foreground">Canônica Google</dt><dd>{result.googleCanonical ?? 'Não informada'}</dd></div><div><dt className="text-muted-foreground">Canônica declarada</dt><dd>{result.userCanonical ?? 'Não informada'}</dd></div></dl>{result.inspectionUrl&&<a className="text-accent inline-flex gap-2 mt-3" href={result.inspectionUrl} target="_blank" rel="noopener noreferrer">Abrir no Search Console <ExternalLink size={14}/></a>}</details>}</article>;})}</div>
        <section className="py-8 border-b border-border"><div className="flex flex-wrap justify-between gap-2 mb-4"><h2 className="text-xl font-semibold">Sitemap</h2><p className="text-xs text-muted-foreground">Consultado: {date(snapshot?.payload?.sitemapCheckedAt)}</p></div>{sitemaps.length===0?<p className="text-muted-foreground">{snapshot?.payload?.sitemapCheckedAt?'O Google não retornou sitemaps para esta propriedade.':'Status ainda não consultado.'}</p>:sitemaps.map(s=><div key={s.path} className="py-3"><p className="break-all font-medium">{s.path}</p><div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-3"><span className={Number(s.errors)>0?'text-destructive':'text-accent'}>{s.errors ?? 0} erros</span><span>{s.warnings ?? 0} avisos</span><span>{s.isPending?'Processamento pendente':'Processado pelo Google'}</span><span>{s.contents?.reduce((n,c)=>n+Number(c.submitted ?? 0),0) ?? 0} URLs enviadas</span></div><p className="text-xs text-muted-foreground mt-3">Última leitura: {date(s.lastDownloaded)} · Envio: {date(s.lastSubmitted)}</p>{Number(s.errors)>0&&<p className="text-sm mt-3 text-destructive">O Google informa erros, mas não disponibiliza a causa nesta resposta.</p>}</div>)}<a className="inline-flex items-center gap-2 text-accent text-sm mt-5" href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">Abrir Google Search Console <ExternalLink size={14}/></a></section>
        <section className="py-8 max-w-md"><h2 className="text-xl font-semibold mb-4">Meu perfil</h2><Label htmlFor="profile-name">Nome</Label><Input className="mt-2" id="profile-name" value={name} onChange={e=>{setName(e.target.value);setProfileSaved(false);}} maxLength={100}/><Button variant="outline" className="mt-3" onClick={async()=>{const {error:failure}=await supabase.from('profiles').update({display_name:name,updated_at:new Date().toISOString()}).eq('id',user.id);if(failure)setError(failure.message);else setProfileSaved(true);}}>Salvar perfil</Button>{profileSaved&&<span role="status" className="text-accent text-sm ml-3">Salvo</span>}</section>
      </>}
    </div>
  </main>;
}