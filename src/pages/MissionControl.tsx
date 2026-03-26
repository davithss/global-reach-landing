import { Shield, MessageCircle, Instagram, Bot, CheckCircle2, ArrowRight, ChevronDown, Clock, TrendingUp, Zap, Sparkles, Target, LayoutGrid, Film, ImageIcon } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const FAQ_ITEMS = [
  {
    q: "Funciona para o meu nicho?",
    a: "Sim. O sistema tem configurações específicas para Saúde, Moda & Beleza, Gastronomia, Educação e B2B. Cada nicho tem seus próprios hooks, CTAs e estrutura de post — o agente já sabe o que funciona para sua audiência.",
  },
  {
    q: "Quanto tempo leva para configurar?",
    a: "Em média 3 dias úteis. Fazemos todo o setup: conectamos sua conta, treinamos o agente com o DNA da sua marca e entregamos funcionando.",
  },
  {
    q: "Preciso saber de tecnologia?",
    a: "Não. Você usa um painel simples para aprovar posts, ver conversas e acompanhar resultados. Quer sugerir um tema para o post? É só digitar. A gente cuida do resto.",
  },
  {
    q: "Como funciona a geração de posts virais?",
    a: "O sistema usa um Hook Engine com 5 estruturas virais comprovadas (dado chocante, mito vs verdade, pergunta acusatória, urgência real e identificação). O Slide 1 para o scroll, o Slide 2 prende o leitor, os slides do meio entregam valor e o último tem o CTA certo pro seu nicho. Você aprova antes de publicar.",
  },
  {
    q: "O agente responde igual a mim?",
    a: "É o objetivo. Treinamos o agente com seu tom, suas expressões, seus limites e sua forma de atender. Quanto mais você usa, mais ele aprende.",
  },
  {
    q: "E se eu quiser cancelar?",
    a: "Sem fidelidade. Cancele quando quiser, sem multa. Mas a maioria dos clientes fica porque os resultados aparecem rápido.",
  },
  {
    q: "Funciona com equipe ou só individual?",
    a: "Funciona para os dois. Temos workspaces para profissionais autônomos e para clínicas ou empresas com vários atendentes. Fale com a gente e montamos o que faz sentido para você.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-900 transition-colors"
      >
        <span className="font-semibold text-white text-sm">{q}</span>
        <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

const NICHES = [
  { id: "saude",       emoji: "🏥", label: "Saúde",          hook: "1 em cada 3 crianças tem vacina atrasada. A sua?",             cta: "Salva pra não esquecer 🔖" },
  { id: "moda",        emoji: "👗", label: "Moda & Beleza",   hook: "Você gasta R$500 em roupas que nunca usa. Para o scroll.",      cta: "Marca a amiga que precisa ver isso 👯" },
  { id: "restaurante", emoji: "🍽️", label: "Gastronomia",     hook: "Por que esse prato específico faz as pessoas voltarem sempre?", cta: "Salva pro próximo fim de semana 🍽️" },
  { id: "educacao",    emoji: "📚", label: "Educação",        hook: "87% dos profissionais que pedem aumento... nunca pedem.",       cta: "Salva — isso pode mudar sua carreira 🔖" },
  { id: "b2b",         emoji: "💼", label: "B2B / Serviços",  hook: "Sua empresa perde R$X mil por mês fazendo isso manualmente.",   cta: "Salva pra usar na sua empresa 📌" },
];

export default function MissionControl() {
  const [activeNiche, setActiveNiche] = useState("saude");
  const niche = NICHES.find(n => n.id === activeNiche) ?? NICHES[0];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Helmet>
        <title>Mission Control — IA que cria posts virais e atende no WhatsApp</title>
        <meta name="description" content="Hook engine viral, carrosséis que prendem, CTAs que geram saves — para qualquer nicho. A partir de R$297/mês." />
        <meta property="og:title" content="Mission Control — IA que cria posts virais e atende no WhatsApp" />
        <meta property="og:description" content="Hook engine viral, carrosséis que prendem, CTAs que geram saves — para qualquer nicho. A partir de R$297/mês." />
        <meta property="og:image" content="https://thiesse.com.br/og-mission-control.png" />
        <meta property="og:url" content="https://thiesse.com.br/mission-control" />
        <meta name="twitter:title" content="Mission Control — IA que cria posts virais e atende no WhatsApp" />
        <meta name="twitter:description" content="Hook engine viral, carrosséis que prendem, CTAs que geram saves — para qualquer nicho." />
        <meta name="twitter:image" content="https://thiesse.com.br/og-mission-control.png" />
      </Helmet>

      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-white">Mission Control</span>
          </div>
          <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">← thiesse.com.br</a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-950 border border-purple-800 px-3 py-1 text-xs font-semibold text-purple-400 mb-8">
          🇧🇷 Para qualquer nicho — Saúde · Moda · Gastronomia · Educação · B2B
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6 tracking-tight">
          Seu Instagram postando todo dia
          <br />
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            com estrutura viral.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Hooks que param o scroll. Carrosséis que o algoritmo ama. CTAs que geram saves e compartilhamentos — tudo com a <strong className="text-white">voz da sua marca</strong>, adaptado ao seu nicho.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Ver planos <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/557981029218?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Mission+Control"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-700 text-gray-300 px-8 py-4 font-semibold text-lg hover:border-gray-500 hover:text-white transition-colors"
          >
            Falar com a equipe
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          ⚠️ Vagas limitadas por plano — cada workspace é configurado individualmente
        </p>
      </section>

      {/* NICHO PICKER */}
      <section className="bg-gray-900 border-y border-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Funciona para o seu nicho</h2>
            <p className="text-gray-400">Clique no seu segmento e veja como o agente cria o hook</p>
          </div>

          {/* Pills de nicho */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {NICHES.map(n => (
              <button
                key={n.id}
                onClick={() => setActiveNiche(n.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                  activeNiche === n.id
                    ? "border-purple-500 bg-purple-900/30 text-white"
                    : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200"
                }`}
              >
                <span>{n.emoji}</span> {n.label}
              </button>
            ))}
          </div>

          {/* Preview do carrossel */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-5 gap-2">
              {/* Slide 1 — Hook */}
              <div className="col-span-2 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-800 p-4 space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">Slide 1</span>
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-1.5 py-0.5 rounded">Hook</span>
                </div>
                <p className="text-sm font-bold text-white leading-snug">
                  "{niche.hook}"
                </p>
                <p className="text-xs text-gray-500">Para o scroll em 2s</p>
              </div>

              {/* Slide 2 — Retention */}
              <div className="rounded-xl bg-gray-900 border border-gray-700 p-3 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-yellow-400 uppercase tracking-wide block mb-1">Slide 2</span>
                  <p className="text-xs text-gray-300 font-medium leading-snug">E o pior é que a maioria não percebe até ser tarde →</p>
                </div>
                <p className="text-xs text-gray-600">Retention</p>
              </div>

              {/* Slides do meio */}
              <div className="rounded-xl bg-gray-900 border border-gray-700 p-3 space-y-1.5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wide block mb-1">3–4</span>
                  <p className="text-xs text-gray-400 leading-snug">Valor + desenvolvimento</p>
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-gray-700 rounded w-full" />
                  <div className="h-1 bg-gray-700 rounded w-4/5" />
                  <div className="h-1 bg-gray-700 rounded w-3/5" />
                </div>
              </div>

              {/* Último — CTA */}
              <div className="rounded-xl bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-800 p-3 space-y-2 flex flex-col justify-between">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wide">Último</span>
                <p className="text-xs text-white font-bold leading-snug">"{niche.cta}"</p>
                <p className="text-xs text-gray-500">CTA do nicho</p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">
              ✦ Estrutura gerada automaticamente pelo Hook Engine — adaptada para o nicho <strong className="text-gray-400">{niche.label}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* COMO A IA CRIA SEUS POSTS */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">O Hook Engine — como funciona</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Não é IA genérica. É uma estrutura de viralização baseada em psicologia de atenção — aplicada automaticamente em cada post.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              color: "bg-pink-900/30 text-pink-400",
              title: "5 estruturas de hook",
              desc: "Dado chocante, pergunta acusatória, mito vs verdade, urgência real, identificação. O agente escolhe o certo para cada post.",
            },
            {
              icon: LayoutGrid,
              color: "bg-purple-900/30 text-purple-400",
              title: "Slide 2 = retenção",
              desc: "O Slide 2 é o que decide se o usuário continua ou abandona. O agente sempre coloca um cliffhanger que força o próximo deslize.",
            },
            {
              icon: Sparkles,
              color: "bg-blue-900/30 text-blue-400",
              title: "Você sugere o tema",
              desc: "Quer falar de um lançamento, uma data comemorativa ou uma tendência? Digita o tema — o agente cria com a estrutura viral certa.",
            },
            {
              icon: TrendingUp,
              color: "bg-green-900/30 text-green-400",
              title: "CTA que gera saves",
              desc: "Salvar é o sinal mais forte pro algoritmo. Cada post termina com o CTA certo para o seu nicho — o que sua audiência realmente clica.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-800 bg-gray-900 p-6 space-y-3">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-gray-900 border-y border-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Você está perdendo leads toda hora</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              78% dos clientes fecham com o primeiro profissional que responde. E seu Instagram parado não está trazendo ninguém novo.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Sem tempo pra responder", desc: "Entre atendimentos, reuniões e vida pessoal — você simplesmente não consegue estar disponível 24h." },
              { icon: Film, title: "Instagram parado", desc: "Você sabe que precisaria postar todo dia, mas criar conteúdo do zero consome horas que você não tem." },
              { icon: Zap, title: "Concorrência mais rápida", desc: "Enquanto você pensa na resposta, o concorrente já agendou. Enquanto você planeja o post, ele já publicou 3." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-700 bg-gray-950 p-6 space-y-3">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-red-900/30">
                  <item.icon className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Escolha seu agente</h2>
          <p className="text-gray-400 text-lg">Configure uma vez. Trabalha pra sempre.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* WhatsApp AI */}
          <div className="rounded-2xl border border-blue-800 bg-gray-900 p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-blue-900/50 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wide">Produto 1</p>
                <h3 className="font-bold text-white">WhatsApp Business AI</h3>
              </div>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">R$297</span>
              <span className="text-gray-400">/mês</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Agente com a personalidade da sua marca",
                "Atende, qualifica e agenda automaticamente 24h",
                "Integração com Google Calendar",
                "Aprende com cada conversa",
                "Dashboard completo de conversas",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://payfast.greenn.com.br/g57my48"
              className="block text-center rounded-xl bg-blue-600 text-white py-3 font-bold hover:bg-blue-500 transition-colors"
            >
              Começar agora
            </a>
          </div>

          {/* Instagram AI */}
          <div className="rounded-2xl border border-purple-800 bg-gray-900 p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-purple-900/50 flex items-center justify-center">
                <Instagram className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-purple-400 font-semibold uppercase tracking-wide">Produto 2</p>
                <h3 className="font-bold text-white">Instagram AI</h3>
              </div>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">R$397</span>
              <span className="text-gray-400">/mês</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Hook Engine com 5 estruturas virais por nicho",
                "Carrosséis com Slide 2 de retenção automático",
                "CTA que gera saves e compartilhamentos",
                "Você sugere o tema — o agente cria",
                "Feed, Reels e Carrosséis com estrutura profissional",
                "Publica direto no seu Instagram",
                "Relatório de desempenho mensal",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://payfast.greenn.com.br/rq2cgye"
              className="block text-center rounded-xl bg-purple-600 text-white py-3 font-bold hover:bg-purple-500 transition-colors"
            >
              Começar agora
            </a>
          </div>

          {/* Combo */}
          <div className="rounded-2xl border-2 border-transparent bg-gradient-to-b from-blue-900/40 to-purple-900/40 p-8 flex flex-col relative overflow-hidden" style={{ backgroundClip: "padding-box" }}>
            <div className="absolute inset-0 rounded-2xl -z-10" style={{ background: "linear-gradient(135deg, #1e3a5f, #3b1f6e)", opacity: 0.5 }} />
            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
              MAIS POPULAR
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Combo</p>
                <h3 className="font-bold text-white">WhatsApp + Instagram</h3>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-4xl font-bold text-white">R$597</span>
              <span className="text-gray-400">/mês</span>
            </div>
            <p className="text-sm text-green-400 font-semibold mb-6">Você economiza R$97/mês</p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Tudo do WhatsApp Business AI",
                "Tudo do Instagram AI com Hook Engine",
                "Agentes integrados e sincronizados",
                "Prioridade no suporte",
                "Onboarding dedicado 1:1",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-200">
                  <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://payfast.greenn.com.br/42fkh99"
              className="block text-center rounded-xl py-3 font-bold text-white transition-colors"
              style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
            >
              Começar agora — Combo
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-gray-900 border-y border-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Como funciona — 3 passos simples</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Conta seu DNA",
                desc: "Você preenche: nome da marca, nicho, o que vende e como quer ser visto. Leva 15 minutos. Nada técnico.",
              },
              {
                step: "02",
                title: "A gente configura",
                desc: "Treinamos o agente com seu nicho, tom de voz e produto. Conectamos WhatsApp e/ou Instagram. Testamos com você antes de ir ao ar.",
              },
              {
                step: "03",
                title: "Liga o agente",
                desc: "Você aprova os posts antes de publicar, sugere temas quando quiser e acompanha tudo pelo painel. O agente faz o trabalho pesado.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-purple-600 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATOS */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Feed, Reel ou Carrossel — todos com estrutura viral</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada formato tem sua própria estrutura. O agente sabe o que fazer em cada um.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: ImageIcon,
              color: "bg-orange-900/30 text-orange-400",
              border: "border-orange-900/50",
              format: "Feed",
              structure: [
                "Hook (para o scroll em 1 linha)",
                "Desenvolvimento com lista ou narrativa",
                "Insight final — a frase que o leitor salva",
                "CTA do nicho antes das hashtags",
              ],
            },
            {
              icon: LayoutGrid,
              color: "bg-cyan-900/30 text-cyan-400",
              border: "border-cyan-900/50",
              format: "Carrossel",
              structure: [
                "Slide 1: Hook que para o scroll",
                "Slide 2: Retention (cliffhanger obrigatório)",
                "Slides 3–4: Valor e desenvolvimento",
                "Último: CTA que gera saves",
              ],
            },
            {
              icon: Film,
              color: "bg-pink-900/30 text-pink-400",
              border: "border-pink-900/50",
              format: "Reel",
              structure: [
                "Hook nas primeiras 2 linhas",
                "Contexto: por que isso importa pra você",
                "Virada: o insight que o vídeo entrega",
                "CTA: salva, compartilha ou clica",
              ],
            },
          ].map((item) => (
            <div key={item.format} className={`rounded-xl border ${item.border} bg-gray-900 p-6 space-y-4`}>
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-white text-lg">{item.format}</h3>
              </div>
              <ul className="space-y-2">
                {item.structure.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-xs font-bold text-gray-500 mt-0.5 shrink-0">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-gray-900 border-y border-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Quem já usa</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Bia Munareto",
                role: "Psicóloga clínica, São Paulo",
                quote: "Eu respondia mensagens entre sessões, às 23h, no final de semana. Hoje o agente faz isso por mim e eu só vejo os agendamentos confirmados. Virou um vício.",
                emoji: "🧠",
              },
              {
                name: "Rodrigo Faria",
                role: "Coach de alta performance, Curitiba",
                quote: "Meu Instagram estava parado faz 3 meses. Em 2 semanas com o Mission Control postei 14 vezes — com a minha voz, não parece IA. Consegui 3 clientes novos direto pelo feed.",
                emoji: "⚡",
              },
              {
                name: "Camila Duarte",
                role: "Nutricionista, Florianópolis",
                quote: "A primeira semana eu fiquei monitorando cada resposta com medo. Depois de um mês eu confio mais no agente do que em estagiário. Sério.",
                emoji: "🌿",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-800 bg-gray-950 p-6 space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 border-t border-gray-800 pt-4">
                  <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-xl">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas frequentes</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gray-900 border-y border-gray-800">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Seu concorrente já está postando.<br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Começa hoje.
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Fale com a equipe. A gente entende seu nicho e mostra como o agente vai trabalhar para você — sem enrolação.
          </p>
          <a
            href="https://wa.me/557981029218?text=Ol%C3%A1%2C+quero+conhecer+o+Mission+Control"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-5 font-bold text-xl hover:opacity-90 transition-opacity"
          >
            Começar agora <ArrowRight className="h-6 w-6" />
          </a>
          <p className="mt-6 text-sm text-gray-500">
            ⚠️ Vagas limitadas — cada workspace é configurado individualmente
          </p>
        </div>
      </section>

      {/* Privacy */}
      <section className="border-t border-gray-800 py-16" id="privacidade">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-blue-400" />
            <h2 className="text-xl font-bold">Privacidade e uso dos dados</h2>
          </div>
          <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
            <p>O Mission Control utiliza a API oficial do WhatsApp Business e do Instagram (Meta) para fornecer serviços de automação de atendimento e marketing.</p>
            <p><strong className="text-white">Uso dos dados:</strong> Os dados recebidos via API são utilizados exclusivamente para fornecer o serviço contratado. Nenhuma informação é compartilhada com terceiros.</p>
            <p><strong className="text-white">Conformidade:</strong> Operamos em conformidade com a Política de Dados do Facebook, os Termos de Serviço da API do WhatsApp Business e a LGPD.</p>
            <p>Dúvidas: <a href="mailto:privacidade@thiesse.com.br" className="text-blue-400 hover:underline">privacidade@thiesse.com.br</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Thiesse — Mission Control. Todos os direitos reservados.</p>
        <p className="mt-1">
          <a href="https://wa.me/557981029218?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Mission+Control" className="hover:text-gray-300 transition-colors">💬 WhatsApp</a>
          {" · "}
          <a href="#privacidade" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
        </p>
      </footer>
    </div>
  );
}
