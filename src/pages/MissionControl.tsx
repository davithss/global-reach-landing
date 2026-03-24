import { Shield, MessageCircle, Instagram, Bot, CheckCircle2, ArrowRight, ChevronDown, Clock, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const FAQ_ITEMS = [
  {
    q: "Quanto tempo leva para configurar?",
    a: "Em média 3 dias úteis. Fazemos todo o setup: conectamos sua conta, treinamos o agente com o DNA da sua marca e entregamos funcionando.",
  },
  {
    q: "Preciso saber de tecnologia?",
    a: "Não. Você usa um painel simples para aprovar respostas, ver conversas e acompanhar resultados. A gente cuida do resto.",
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
    q: "Funciona com clínica que tem mais de um profissional?",
    a: "Sim. Temos planos para equipes. Fale com a gente e montamos um workspace personalizado para sua clínica.",
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

export default function MissionControl() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Helmet>
        <title>Mission Control — Agente de IA para WhatsApp e Instagram</title>
        <meta name="description" content="Agente de IA para WhatsApp e Instagram que atende, agenda e vende enquanto você dorme. A partir de R$297/mês." />
        <meta property="og:title" content="Mission Control — Agente de IA para WhatsApp e Instagram" />
        <meta property="og:description" content="Agente de IA para WhatsApp e Instagram que atende, agenda e vende enquanto você dorme. A partir de R$297/mês." />
        <meta property="og:image" content="https://thiesse.com.br/og-mission-control.png" />
        <meta property="og:url" content="https://thiesse.com.br/mission-control" />
        <meta name="twitter:title" content="Mission Control — Agente de IA para WhatsApp e Instagram" />
        <meta name="twitter:description" content="Agente de IA para WhatsApp e Instagram que atende, agenda e vende enquanto você dorme." />
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
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-950 border border-blue-800 px-3 py-1 text-xs font-semibold text-blue-400 mb-8">
          🇧🇷 Usado por psicólogos, terapeutas e profissionais autônomos no Brasil
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6 tracking-tight">
          Seu concorrente já tem um<br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            agente de IA trabalhando 24h.
          </span>
          <br />E você?
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Enquanto você dorme, o Mission Control atende seus clientes, agenda consultas e posta no Instagram — <strong className="text-white">com a sua voz</strong>, não com uma resposta genérica.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-8 py-4 font-bold text-lg hover:bg-blue-500 transition-colors"
          >
            Ver planos <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="mailto:contato@thiesse.com.br"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-700 text-gray-300 px-8 py-4 font-semibold text-lg hover:border-gray-500 hover:text-white transition-colors"
          >
            Falar com a equipe
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          ⚠️ Vagas limitadas por plano — cada workspace é configurado individualmente
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="bg-gray-900 border-y border-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Você está perdendo leads toda hora que não responde</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Estudos mostram que 78% dos clientes fecham com o primeiro profissional que responde. Se você demora mais de 5 minutos, perdeu.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Sem tempo pra responder", desc: "Entre atendimentos, reuniões e vida pessoal — você simplesmente não consegue estar disponível 24h." },
              { icon: TrendingUp, title: "Instagram parado", desc: "Você sabe que precisaria postar todo dia, mas criar conteúdo do zero consome horas que você não tem." },
              { icon: Zap, title: "Concorrência mais rápida", desc: "Enquanto você pensa na resposta, o concorrente já agendou a consulta. Com IA, você sempre chega primeiro." },
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
                "Cria posts, carrosséis e reels com a sua voz",
                "Calendário editorial automático",
                "Publica nos melhores horários",
                "Copy baseado nos maiores copywriters",
                "Relatório mensal de desempenho",
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
                "Tudo do Instagram AI",
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
                desc: "Você responde um formulário sobre sua marca, tom de voz, serviços e como costuma atender. Leva 15 minutos.",
              },
              {
                step: "02",
                title: "A gente configura",
                desc: "Treinamos o agente com sua identidade, conectamos WhatsApp e/ou Instagram, e testamos com você antes de ir ao ar.",
              },
              {
                step: "03",
                title: "Liga o agente",
                desc: "Você aprova, o agente começa a trabalhar. Você acompanha pelo painel e interfere quando quiser.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="max-w-5xl mx-auto px-6 py-24">
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
            <div key={t.name} className="rounded-2xl border border-gray-800 bg-gray-900 p-6 space-y-4">
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
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 border-y border-gray-800 py-20">
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
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Seu agente está esperando.<br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Começa hoje.
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Não precisa assinar nada agora. Manda um e-mail, a gente entende seu negócio e te explica como funciona. Sem enrolação.
        </p>
        <a
          href="mailto:contato@thiesse.com.br?subject=Quero conhecer o Mission Control"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 font-bold text-xl hover:opacity-90 transition-opacity"
        >
          Começar agora <ArrowRight className="h-6 w-6" />
        </a>
        <p className="mt-6 text-sm text-gray-500">
          ⚠️ Vagas limitadas — cada workspace é configurado individualmente
        </p>
      </section>

      {/* Privacy */}
      <section className="bg-gray-900 border-t border-gray-800 py-16" id="privacidade">
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
          <a href="mailto:contato@thiesse.com.br" className="hover:text-gray-300 transition-colors">contato@thiesse.com.br</a>
          {" · "}
          <a href="#privacidade" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
        </p>
      </footer>
    </div>
  );
}
