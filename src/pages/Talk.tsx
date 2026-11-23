import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Loader2, MapPin, ShieldCheck, Users } from "lucide-react";
import { FunctionsHttpError } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageSEO from "@/components/PageSEO";
import { supabase } from "@/integrations/supabase/client";
import { talkDetails, talkRegistrationSchema } from "@/lib/talk-registration";
import photo from "@/assets/davi-speaking.jpeg";
import logo from "@/assets/thiesse-logo-dark.svg";

export default function Talk() {
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const submitting = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const values = new FormData(event.currentTarget);
    const parsed = talkRegistrationSchema.safeParse(Object.fromEntries(values));
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Verifique os dados."); return; }
    submitting.current = true;
    setBusy(true);
    setError("");
    try {
      const { data, error: sendError } = await supabase.functions.invoke("talk-register", { body: parsed.data });
      if (sendError) {
        if (sendError instanceof FunctionsHttpError) {
          const details = await sendError.context.json().catch(() => null);
          throw new Error(details?.error ?? "Não foi possível enviar sua inscrição. Tente novamente mais tarde.");
        }
        throw new Error("Não foi possível confirmar o envio. Verifique sua conexão e tente mais tarde.");
      }
      if (!data?.success) throw new Error("Não foi possível confirmar a inscrição.");
      setSuccess(true);
    } catch (err) { setError(err instanceof Error ? err.message : "Não foi possível enviar agora."); }
    finally { setBusy(false); submitting.current = false; }
  }

  return <div className="min-h-screen bg-background text-foreground">
    <PageSEO path="/palestra" />
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <a href="/" aria-label="TSoftwares — página inicial"><img src={logo} alt="TSoftwares" className="h-9 w-auto" /></a>
        <span className="text-xs font-medium text-muted-foreground">ESCOLA DE GOVERNO</span>
      </div>
    </header>
    <main>
      <section className="talk-hero relative isolate overflow-hidden">
        <img src={photo} alt="Davi Thiesse durante uma palestra" className="talk-photo absolute inset-y-0 right-0 -z-20 h-full object-cover" />
        <div className="talk-shade absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-6 flex items-center gap-3 text-sm font-medium text-accent"><span className="h-px w-8 bg-accent" /> PALESTRA · 26 NOV 2026</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">Inteligência Artificial<br className="hidden sm:block" /> na Gestão Pública</h1>
          <p className="mt-6 text-xl font-medium">Com Davi Thiesse</p>
          <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">Escola de Governo<br />Secretaria de Estado da Administração</p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 text-sm">
            <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-accent" /><time dateTime={talkDetails.startsAt}>26 de novembro de 2026</time></span>
            <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-accent" />08h30</span>
          </div>
          <Button size="lg" asChild className="mt-9"><a href="#inscricao">Inscrever-me <ArrowRight className="h-4 w-4" /></a></Button>
        </div>
      </section>
      <section id="inscricao" className="scroll-mt-6 border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="text-sm font-medium text-accent">INSCRIÇÃO</p>
            <h2 className="mt-3 text-3xl font-semibold">Nos vemos na<br />Escola de Governo.</h2>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">Inscreva-se para a palestra com Davi Thiesse sobre Inteligência Artificial na Gestão Pública.</p>
            <div className="mt-7 flex items-start gap-3 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>Escola de Governo<br />Secretaria de Estado da Administração</span></div>
          </div>
          {success ? <div role="status" className="py-4">
            <CheckCircle2 className="h-10 w-10 text-accent" />
            <h2 className="mt-5 text-3xl font-semibold">Inscrição realizada!</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Seu nome está na lista. Esperamos você em 26 de novembro, às 08h30.</p>
            <div className="my-7 border-t border-border pt-7"><h3 className="text-xl font-semibold">Comunidade dos Imparáveis</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Você também pode participar da comunidade de Davi no WhatsApp.</p></div>
            <Button size="lg" asChild className="h-auto min-h-12 w-full whitespace-normal py-3"><a href={talkDetails.communityUrl} target="_blank" rel="noopener noreferrer"><Users className="h-5 w-5 shrink-0" /> Entrar na comunidade <ArrowRight className="h-4 w-4 shrink-0" /></a></Button>
          </div> : <form onSubmit={submit} aria-label="Inscrição para a palestra" className="space-y-5">
            <div><label htmlFor="talk-name" className="mb-2 block text-sm font-medium">Nome completo</label><Input id="talk-name" name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Seu nome" className="h-12 bg-card" /></div>
            <div><label htmlFor="talk-company" className="mb-2 block text-sm font-medium">Empresa</label><Input id="talk-company" name="company" autoComplete="organization" required minLength={2} maxLength={150} placeholder="Empresa ou órgão em que você trabalha" className="h-12 bg-card" /></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="talk-phone" className="mb-2 block text-sm font-medium">Celular</label><Input id="talk-phone" name="phone" autoComplete="tel" type="tel" required maxLength={30} placeholder="(79) 99999-9999" className="h-12 bg-card" /></div>
              <div><label htmlFor="talk-email" className="mb-2 block text-sm font-medium">Email</label><Input id="talk-email" name="email" autoComplete="email" type="email" required maxLength={255} placeholder="voce@exemplo.com" className="h-12 bg-card" /></div>
            </div>
            {error && <p role="alert" className="text-sm text-mc-warning">{error}</p>}
            <Button type="submit" size="lg" disabled={busy} className="w-full">{busy ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando inscrição</> : <>Confirmar inscrição <ArrowRight className="h-4 w-4" /></>}</Button>
            <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" /> Seus dados serão usados para organizar a inscrição nesta palestra. A participação na comunidade é opcional.</p>
          </form>}
        </div>
      </section>
    </main>
    <footer className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground">Davi Thiesse · TSoftwares · 2026</footer>
  </div>;
}