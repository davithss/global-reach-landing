import {
  Bell,
  Cloud,
  ShieldCheck,
  CalendarCheck,
  BarChart2,
  Smartphone,
  Star,
  AlertTriangle,
  Clock,
  HeartPulse,
} from "lucide-react";

export default function VacinApp() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* subtle glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          {/* eyebrow */}
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-sm font-medium tracking-wide border border-green-500/25">
            App gratuito — iOS & Android
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Você sabe quando foi{" "}
            <span className="text-green-400">a última vacina</span>{" "}
            do seu filho?
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
            Antes dos 2 anos, seu filho precisa tomar{" "}
            <strong className="text-white">14 vacinas obrigatórias.</strong>{" "}
            Perder uma pode colocar a vida dele em risco.
          </p>
          <p className="text-lg sm:text-xl text-green-400 font-semibold mb-10">
            O VacinApp lembra por você — para você não precisar lembrar sozinha.
          </p>

          {/* CTA duplo */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/br/app/vacinapp-brasil/id6745732874?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-gray-950 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <AppleIcon />
              Baixar na App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.vacinapp.vacinapp&hl=pt_PT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-green-400 transition-colors shadow-lg shadow-green-500/25"
            >
              <PlayIcon />
              Baixar no Google Play
            </a>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            100% gratuito · Sem anúncios · Dados protegidos
          </p>
        </div>
      </section>

      {/* ── PROVA SOCIAL ───────────────────────────────────────── */}
      <section className="border-y border-gray-800 bg-gray-900/50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "+47 mil", label: "famílias protegidas" },
              { number: "4,9 ★", label: "avaliação média" },
              { number: "14", label: "vacinas monitoradas" },
              { number: "Zero", label: "doses perdidas reportadas" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-green-400">{stat.number}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMA / AGITAÇÃO ────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-green-500 mb-3">
          Você já se pegou pensando isso?
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 leading-tight">
          O medo que toda mãe carrega — <br className="hidden sm:block" />
          mas ninguém fala em voz alta
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Clock className="w-7 h-7 text-red-400" />,
              title: "Já passou da data?",
              body:
                "Você olha para a caderneta de vacinação e não consegue decifrar as letras do médico. A data da próxima dose ficou perdida entre consultas, trabalho e noites sem dormir.",
            },
            {
              icon: <AlertTriangle className="w-7 h-7 text-yellow-400" />,
              title: "E se eu tiver esquecido uma?",
              body:
                "Sua filha está saudável — mas aquela dúvida fica roendo. A vacina da meningite foi no mês certo? E a do rotavírus, que só pode ser tomada até os 7 meses e 29 dias?",
            },
            {
              icon: <HeartPulse className="w-7 h-7 text-pink-400" />,
              title: "Não quero que nada aconteça com ele.",
              body:
                "Sarampo, coqueluche, meningite — doenças que você achava extintas ainda existem. E a única coisa que protege o seu filho é uma dose dada na hora certa.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{card.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10 max-w-xl mx-auto">
          Esses medos são reais. E nenhuma mãe deveria carregar isso sozinha — ou depender de uma caderneta de papel que some na bolsa.
        </p>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────── */}
      <section className="bg-gray-900/40 border-y border-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-green-500 mb-3">
            O que o VacinApp faz por você
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 leading-tight">
            Tudo que uma mãe precisa saber,{" "}
            <span className="text-green-400">num único lugar</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Bell className="w-6 h-6 text-green-400" />,
                title: "Alertas na hora certa",
                body:
                  "Notificações automáticas antes de cada dose — dias antes, no dia, e um lembrete de confirmação. Nenhuma vacina passa em branco.",
              },
              {
                icon: <CalendarCheck className="w-6 h-6 text-green-400" />,
                title: "Calendário completo do SUS + particular",
                body:
                  "Todas as 14 vacinas obrigatórias do calendário oficial + opcionais privadas, organizadas por idade do seu filho. Sempre atualizado.",
              },
              {
                icon: <Cloud className="w-6 h-6 text-green-400" />,
                title: "Histórico salvo na nuvem",
                body:
                  "Acabou a caderneta de papel. O histórico completo de vacinas fica seguro na nuvem — acessível de qualquer celular, para sempre.",
              },
              {
                icon: <BarChart2 className="w-6 h-6 text-green-400" />,
                title: "Análise preditiva de saúde",
                body:
                  "O app identifica padrões e alerta sobre janelas de vacinação críticas antes que você precise se preocupar. Proativo, não reativo.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
                title: "SUS e plano privado juntos",
                body:
                  "Controle vacinas públicas e particulares no mesmo lugar. Sem duplicidade, sem confusão — tudo integrado e organizado.",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-green-400" />,
                title: "Funciona sem internet",
                body:
                  "Está no posto de saúde sem sinal? Sem problema. O VacinApp funciona offline e sincroniza automaticamente quando a conexão voltar.",
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-green-500/40 transition-colors"
              >
                <div className="mb-4 w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-base mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-green-500 mb-3">
          O que as mães dizem
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14">
          Mães reais. Histórias reais.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Camila R.",
              location: "São Paulo, SP",
              stars: 5,
              text:
                "Minha filha tem 8 meses e eu estava perdida com o calendário do SUS. O VacinApp me avisou 3 dias antes da vacina de rotavírus — que só pode ser dada até os 7 meses e 29 dias. Se não fosse o app, teria perdido a janela.",
            },
            {
              name: "Fernanda M.",
              location: "Belo Horizonte, MG",
              stars: 5,
              text:
                "Meu marido cuida do Pedro quando eu trabalho. Agora os dois recebemos o alerta ao mesmo tempo. Não preciso mais ficar ligando para saber se ele lembrou da vacina. O app faz isso por nós.",
            },
            {
              name: "Juliana A.",
              location: "Curitiba, PR",
              stars: 5,
              text:
                "Já perdi uma caderneta de vacinação. Fiquei apavorada, sem saber quais doses meu filho tinha tomado. Com o VacinApp isso nunca mais vai acontecer — está tudo salvo, com data e clínica.",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="bg-gray-900 border border-green-500/30 rounded-3xl p-10 shadow-2xl shadow-green-500/5">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-sm font-medium border border-green-500/25">
              100% gratuito — para sempre
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              A próxima vacina do seu filho{" "}
              <span className="text-green-400">não pode esperar.</span>
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Mais de 47 mil famílias já confiam no VacinApp para proteger seus filhos.{" "}
              <strong className="text-white">Baixe agora — é gratuito, sempre será.</strong>{" "}
              Leva menos de 2 minutos para configurar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/br/app/vacinapp-brasil/id6745732874?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-gray-950 font-bold px-7 py-4 rounded-2xl text-base hover:bg-gray-100 transition-colors"
              >
                <AppleIcon />
                App Store — grátis
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.vacinapp.vacinapp&hl=pt_PT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-7 py-4 rounded-2xl text-base hover:bg-green-400 transition-colors shadow-lg shadow-green-500/30"
              >
                <PlayIcon />
                Google Play — grátis
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/vacinapp_brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @vacinapp_brasil
              </a>
              <span className="text-gray-700">·</span>
              <span className="text-xs text-gray-600">Criado por Thiesse Softwares · Seus dados nunca são vendidos</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ── SVG helpers ─────────────────────────────────────────────── */

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
      <path d="M3.18 23.76A1.99 1.99 0 0 1 2 22V2C2 .9 2.9.07 3.89.34l17.47 10a2 2 0 0 1 0 3.46l-17.47 10a2 2 0 0 1-.71-.04z" />
    </svg>
  );
}
