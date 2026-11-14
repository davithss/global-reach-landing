import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { missionApplicationSchema } from "@/lib/mission-application";

export default function MissionApplicationForm() {
  const [team, setTeam] = useState("");
  const [waitlist, setWaitlist] = useState(true);
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const data = new FormData(event.currentTarget);
    const parsed = missionApplicationSchema.safeParse({ name: data.get("name"), company: data.get("company"), team_size: team, bottleneck: data.get("bottleneck"), whatsapp: data.get("whatsapp"), waitlist_opt_in: waitlist });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Verifique os dados."); return; }
    setError("");
    setBusy(true);
    try {
      const { data: result, error: sendError } = await supabase.functions.invoke("mission-control-apply", { body: parsed.data });
      if (sendError || !result?.success) throw new Error("Não foi possível enviar agora. Tente novamente ou fale com nossa equipe no WhatsApp.");
      setSuccess(true);
    } catch (err) { setError(err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente."); }
    finally { setBusy(false); }
  }

  if (success) return <div role="status" className="rounded-lg border border-mc-success/30 bg-card p-8 sm:p-12"><CheckCircle2 className="mb-6 h-10 w-10 text-mc-success" /><h3 className="mb-3 text-2xl font-semibold">Aplicação recebida.</h3><p className="leading-relaxed text-muted-foreground">Nossa equipe vai analisar sua operação e entrar em contato pelo WhatsApp informado. O envio não confirma uma vaga nem gera cobrança.</p>{waitlist && <p className="mt-4 text-sm text-muted-foreground">Sua preferência pela lista de espera também foi registrada, caso não haja uma vaga adequada agora.</p>}<Button asChild variant="outline" className="mt-6"><a href="https://wa.me/5579936181642" target="_blank" rel="noopener noreferrer">Falar com a equipe <ArrowRight /></a></Button></div>;

  return <form onSubmit={submit} className="rounded-lg border border-border bg-card p-6 sm:p-8" aria-label="Aplicação Mission Control">
    <h3 className="text-2xl font-semibold">Conte sobre sua operação</h3><p className="mb-7 mt-2 text-sm text-muted-foreground">Vamos entender onde seu time de IA pode fazer diferença.</p>
    <div className="grid gap-5 sm:grid-cols-2">
      <div><label htmlFor="mc-name" className="mb-2 block text-sm">Seu nome</label><Input id="mc-name" name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Como podemos chamar você?" className="h-12" /></div>
      <div><label htmlFor="mc-company" className="mb-2 block text-sm">Empresa</label><Input id="mc-company" name="company" required minLength={2} maxLength={150} autoComplete="organization" placeholder="Nome da sua empresa" className="h-12" /></div>
      <div><label id="mc-team-label" className="mb-2 block text-sm">Tamanho do time</label><Select value={team} onValueChange={setTeam} required><SelectTrigger aria-labelledby="mc-team-label" className="h-12"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent>{[["solo", "Só eu"], ["2-5", "2 a 5 pessoas"], ["6-15", "6 a 15 pessoas"], ["16-50", "16 a 50 pessoas"], ["51+", "Mais de 50 pessoas"]].map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent></Select></div>
      <div><label htmlFor="mc-phone" className="mb-2 block text-sm">WhatsApp com DDD</label><Input id="mc-phone" name="whatsapp" required maxLength={30} type="tel" autoComplete="tel" placeholder="(79) 99999-9999" className="h-12" /></div>
    </div>
    <label htmlFor="mc-bottleneck" className="mb-2 mt-5 block text-sm">Qual é o seu principal gargalo hoje?</label><Textarea id="mc-bottleneck" name="bottleneck" required minLength={10} maxLength={1000} placeholder="O que mais consome seu tempo ou trava o crescimento?" className="min-h-28 resize-y" />
    <div className="my-5 flex items-start gap-3"><Checkbox id="mc-waitlist" checked={waitlist} onCheckedChange={value => setWaitlist(value === true)} className="mt-1" /><label htmlFor="mc-waitlist" className="text-sm leading-relaxed text-muted-foreground">Se não houver uma vaga adequada agora, quero entrar na lista de espera e receber contato sobre disponibilidade.</label></div>
    {error && <p role="alert" className="mb-4 text-sm text-mc-warning">{error}</p>}
    <Button type="submit" size="lg" disabled={busy} className="w-full">{busy ? <><Loader2 className="animate-spin" /> Enviando aplicação</> : <>Aplicar para uma vaga <ArrowRight /></>}</Button>
    <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="h-4 w-4 shrink-0" /><span>Usamos seus dados para avaliar a aplicação e entrar em contato. <a href="/mission-control/politica-de-privacidade" className="underline underline-offset-2">Política de privacidade</a>.</span></p>
  </form>;
}