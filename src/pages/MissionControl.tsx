import { Shield, MessageCircle, BarChart2, Instagram, Bot, Lock, CheckCircle2, ArrowRight } from "lucide-react";

export default function MissionControl() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="border-b px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-gray-900">Mission Control</span>
        </div>
        <a href="/" className="text-sm text-gray-500 hover:text-gray-900">← thiesse.com.br</a>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-700 mb-6">
          Plataforma de Marketing com IA
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Atendimento inteligente para<br />
          <span className="text-blue-600">profissionais autônomos</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
          O Mission Control usa a API oficial do WhatsApp Business e Instagram para ajudar psicólogos, terapeutas e profissionais a automatizar seu marketing e atendimento com IA.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:contato@thiesse.com.br"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-colors"
          >
            Falar com a equipe <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Como funciona</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                color: "bg-green-100 text-green-700",
                title: "WhatsApp Business",
                desc: "Recebe mensagens dos seus clientes via API oficial do Meta. O agente classifica e responde automaticamente no seu estilo.",
              },
              {
                icon: Instagram,
                color: "bg-pink-100 text-pink-700",
                title: "Instagram",
                desc: "Gera posts, carrosséis e reels com IA treinada no seu DNA de marca. Aprova com 1 clique e publica automaticamente.",
              },
              {
                icon: BarChart2,
                color: "bg-blue-100 text-blue-700",
                title: "Analytics",
                desc: "Dashboard completo com métricas reais do Instagram, score de conteúdo por IA e relatórios mensais automáticos.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border p-6 space-y-3">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who uses */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Para quem é</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Psicólogos e terapeutas",
            "Coaches e mentores",
            "Profissionais de saúde e bem-estar",
            "Consultores e especialistas",
          ].map((who) => (
            <div key={who} className="flex items-center gap-3 rounded-xl border p-4">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
              <span className="text-gray-800 font-medium">{who}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="bg-gray-900 text-white py-20" id="privacidade">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Privacidade e uso dos dados</h2>
          </div>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              O Mission Control utiliza a API oficial do WhatsApp Business e do Instagram (Meta) para fornecer serviços de automação de atendimento e marketing a profissionais autônomos e pequenas empresas.
            </p>
            <p>
              <strong className="text-white">Uso dos dados da plataforma Meta:</strong> Os dados recebidos via API (mensagens do WhatsApp e métricas do Instagram) são utilizados exclusivamente para fornecer o serviço contratado pelo profissional — automação de respostas, geração de conteúdo e análise de desempenho. Nenhuma informação é compartilhada com terceiros.
            </p>
            <p>
              <strong className="text-white">Acesso:</strong> Apenas o profissional titular da conta tem acesso ao painel e às conversas. Os dados são armazenados com segurança e podem ser excluídos a qualquer momento mediante solicitação.
            </p>
            <p>
              <strong className="text-white">Conformidade:</strong> O Mission Control opera em conformidade com a Política de Dados do Facebook, os Termos de Serviço da API do WhatsApp Business e a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <p>
              Para dúvidas sobre privacidade:{" "}
              <a href="mailto:privacidade@thiesse.com.br" className="text-blue-400 underline">
                privacidade@thiesse.com.br
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Thiesse — Mission Control. Todos os direitos reservados.</p>
        <p className="mt-1">
          <a href="mailto:contato@thiesse.com.br" className="hover:text-gray-700">contato@thiesse.com.br</a>
          {" · "}
          <a href="#privacidade" className="hover:text-gray-700">Política de Privacidade</a>
        </p>
      </footer>
    </div>
  );
}
