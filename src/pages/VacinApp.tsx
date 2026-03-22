import { Bell, Shield, Cloud, BarChart2, Share2, Users, Star, ChevronRight, Smartphone, Baby } from "lucide-react";

export default function VacinApp() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center">
            <Baby className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-white">VacinApp</span>
        </div>
        <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">← thiesse.com.br</a>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 text-xs font-semibold text-green-400 mb-6">
          Disponível na App Store
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Nunca mais esqueça uma<br />
          <span className="text-green-400">vacina do seu filho</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          O VacinApp controla o calendário vacinal completo das suas crianças, envia lembretes inteligentes e mantém o histórico sempre à mão — público e particular.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500 text-white px-6 py-3 font-semibold hover:bg-green-400 transition-colors"
          >
            <Smartphone className="h-5 w-5" />
            Baixar na App Store
          </a>
          <a
            href="https://vacinapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-700 text-gray-300 px-6 py-3 font-semibold hover:border-gray-500 hover:text-white transition-colors"
          >
            Saiba mais <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "14+", label: "Vacinas no calendário" },
            { value: "100%", label: "Gratuito" },
            { value: "iOS", label: "Disponível agora" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-green-400">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-4">Por que o VacinApp é diferente?</h2>
          <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">Desenvolvido por engenheiros especializados em saúde, com tecnologia que realmente facilita a vida dos pais.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bell,
                color: "text-green-400 bg-green-400/10",
                title: "Notificações Inteligentes",
                desc: "Lembretes personalizados no momento certo. Nunca mais perca uma vacina por esquecimento.",
              },
              {
                icon: Shield,
                color: "text-blue-400 bg-blue-400/10",
                title: "Público e Particular",
                desc: "Controle completo das vacinas do SUS e das redes particulares em um só lugar.",
              },
              {
                icon: Cloud,
                color: "text-purple-400 bg-purple-400/10",
                title: "Sincronização em Nuvem",
                desc: "Acesse em qualquer dispositivo. Backup automático para você nunca perder os dados.",
              },
              {
                icon: BarChart2,
                color: "text-yellow-400 bg-yellow-400/10",
                title: "Análise Preditiva",
                desc: "IA que prevê as próximas vacinas com base no histórico e recomendações médicas.",
              },
              {
                icon: Users,
                color: "text-pink-400 bg-pink-400/10",
                title: "Perfis para Toda Família",
                desc: "Cadastre todos os filhos com histórico médico completo e recomendações individuais.",
              },
              {
                icon: Share2,
                color: "text-orange-400 bg-orange-400/10",
                title: "Compartilhamento Seguro",
                desc: "Envie o histórico vacinal para médicos e escolas com criptografia de ponta a ponta.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-colors">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-gray-800 py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-14">O que os pais estão dizendo</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Mariana Silva",
                role: "Mãe de 2 filhos",
                text: "As notificações inteligentes me lembram no momento perfeito. O controle de vacinas ficou muito mais fácil.",
              },
              {
                name: "Rafael Oliveira",
                role: "Pai de 1 filho",
                text: "Como pai de primeira viagem, o VacinApp foi um divisor de águas. Me dá confiança total no cuidado com meu filho.",
              },
              {
                name: "Carla Mendes",
                role: "Mãe de 3 filhos",
                text: "Com três filhos precisava de algo realmente eficiente. O VacinApp superou todas as minhas expectativas.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 mb-4">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Baixe agora e proteja seu filho</h2>
          <p className="text-gray-400 mb-8">Junte-se às famílias que nunca mais perderam uma vacina importante.</p>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500 text-white px-8 py-4 font-semibold text-lg hover:bg-green-400 transition-colors"
          >
            <Smartphone className="h-5 w-5" />
            Baixar Grátis na App Store
          </a>
          <p className="text-xs text-gray-600 mt-4">Gratuito · iOS · Dados protegidos</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-gray-600">
          <span>© 2026 VacinApp — Thiesse Softwares</span>
          <a href="https://vacinapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">vacinapp.com</a>
        </div>
      </footer>
    </div>
  );
}
