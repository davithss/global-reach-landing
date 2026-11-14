import { useState } from "react";
import { Activity, ArrowUpRight, Bot, Check, CheckCircle2, FileText, Megaphone, MessageCircle, Palette, Settings2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  { icon: Megaphone, name: "Marketing", task: "Planejando campanha", tone: "text-primary" },
  { icon: FileText, name: "Conteúdo", task: "Preparando calendário", tone: "text-accent" },
  { icon: Palette, name: "Design", task: "Criando peças", tone: "text-mc-warning" },
  { icon: MessageCircle, name: "Atendimento", task: "Organizando respostas", tone: "text-mc-success" },
  { icon: Settings2, name: "Operações", task: "Conectando tarefas", tone: "text-primary" },
];

export default function CommandPreview() {
  const [approved, setApproved] = useState(false);
  return <div className="mc-console mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-background text-left shadow-lg">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-6"><div className="flex items-center gap-3"><Bot className="h-5 w-5 text-accent" /><span className="text-sm font-medium">Seu centro de comando</span></div><span className="flex items-center gap-2 font-mono text-[10px] uppercase text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-mc-success" /> Demonstração ilustrativa</span></div>
    <div className="grid lg:grid-cols-[1fr_260px]">
      <div className="p-4 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><p className="text-lg font-medium">Seu time está em ação.</p><p className="mt-1 text-xs text-muted-foreground">Uma operação. Cinco departamentos conectados.</p></div><Activity className="h-5 w-5 text-accent" /></div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">{agents.map(agent => <div key={agent.name} className="min-w-0 rounded-md border border-border bg-card p-3"><agent.icon className={`mb-3 h-5 w-5 ${agent.tone}`} /><p className="text-xs font-medium">{agent.name}</p><p className="mt-2 min-h-8 text-[10px] leading-relaxed text-muted-foreground">{agent.task}</p><div className="mt-3 h-0.5 overflow-hidden rounded-full bg-secondary"><div className="mc-agent-progress h-full w-2/3 bg-accent" /></div></div>)}</div>
        <div className="mt-5 divide-y divide-border border-y border-border text-xs">{["Marketing enviou o briefing para Conteúdo", "Conteúdo encaminhou as peças para Design", "Operações organizou as próximas entregas"].map((text, i) => <div key={text} className="flex items-center gap-3 py-3"><CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-mc-success" /><span className="text-muted-foreground">{text}</span><span className="ml-auto hidden font-mono text-[10px] text-muted-foreground sm:block">0{i + 1}:00</span></div>)}</div>
      </div>
      <div className="border-t border-border bg-card p-5 lg:border-l lg:border-t-0"><div className="flex items-center gap-2 text-xs text-mc-warning"><Sparkles className="h-4 w-4" /> {approved ? "Entrega aprovada" : "Aguardando sua aprovação"}</div><p className="mb-2 mt-5 font-medium">Campanha de lançamento</p><p className="text-xs leading-relaxed text-muted-foreground">Texto, direção visual e calendário reunidos em uma entrega.</p><div className="my-5 space-y-2">{["Briefing alinhado", "Conteúdo preparado", "Design revisado"].map(text => <p key={text} className="flex items-center gap-2 text-xs"><Check className="h-3 w-3 text-mc-success" />{text}</p>)}</div><Button size="sm" variant={approved ? "secondary" : "default"} onClick={() => setApproved(!approved)} className="w-full">{approved ? <>Aprovado <CheckCircle2 /></> : <>Aprovar demonstração <ArrowUpRight /></>}</Button><p className="mt-3 text-center text-[10px] text-muted-foreground">Você tem a decisão final.</p></div>
    </div>
  </div>;
}