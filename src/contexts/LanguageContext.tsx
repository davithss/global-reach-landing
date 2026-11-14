import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

export const translations: Translations = {
  // Header
  'nav.solutions': { en: 'Solutions', pt: 'Soluções' },
  'nav.products': { en: 'Products', pt: 'Produtos' },
  'nav.experience': { en: 'Experience', pt: 'Experiência' },
  'nav.about': { en: 'About', pt: 'Sobre' },
  'nav.contact': { en: "Let's talk", pt: 'Vamos conversar' },
  'nav.menu': { en: 'Open menu', pt: 'Abrir menu' },

  // Hero
  'hero.kicker': { en: 'Custom software · Brazil, USA & Europe', pt: 'Software sob medida · Brasil, EUA e Europa' },
  'hero.title': { en: 'Less manual work.', pt: 'Menos trabalho manual.' },
  'hero.title_highlight': { en: 'More room to grow.', pt: 'Mais espaço para crescer.' },
  'hero.subtitle': {
    en: 'We build systems, apps and AI automation to simplify your operations and bring your next digital product to life. International expertise, close to your business.',
    pt: 'Desenvolvemos sistemas, aplicativos e automações com IA para simplificar sua operação e tirar seu próximo produto digital do papel. Experiência internacional, perto do seu negócio.',
  },
  'hero.cta_primary': { en: 'Chat on WhatsApp', pt: 'Falar no WhatsApp' },
  'hero.cta_secondary': { en: 'See our solutions', pt: 'Conhecer soluções' },
  'hero.benefit1': { en: 'Custom systems', pt: 'Sistemas sob medida' },
  'hero.benefit2': { en: 'Web & mobile apps', pt: 'Aplicativos web e mobile' },
  'hero.benefit3': { en: 'AI automation', pt: 'Automação com IA' },
  'hero.contact_note': { en: 'Tell us what you need. Speak directly with our founder.', pt: 'Conte o que você precisa. Converse diretamente com o fundador.' },
  'hero.proof_label': { en: 'Company projects & founder’s experience', pt: 'Projetos da empresa e experiência do fundador' },
  'hero.stat_years': { en: 'years of experience', pt: 'anos de experiência' },
  'hero.stat_intl': { en: 'international years', pt: 'anos internacionais' },
  'hero.stat_since': { en: 'international work since', pt: 'atuação internacional desde' },
  'hero.diagram_title': { en: 'software architecture', pt: 'arquitetura de software' },
  'hero.diagram_core': { en: 'Thiesse Core', pt: 'Núcleo Thiesse' },
  'hero.diagram_products': { en: 'Products', pt: 'Produtos' },
  'hero.diagram_operations': { en: 'Operations', pt: 'Operações' },
  'hero.diagram_public': { en: 'Public Sector', pt: 'Setor Público' },
  'hero.diagram_markets': { en: 'Markets BR · US · EU', pt: 'Mercados BR · EUA · UE' },

  // Credibility / Clients
  'clients.label': { en: 'Credibility', pt: 'Credibilidade' },
  'clients.title': { en: 'Who we have', pt: 'Com quem já' },
  'clients.title_highlight': { en: 'worked with', pt: 'trabalhamos' },
  'clients.description': {
    en: 'Direct clients, work delivered through partners, and the founder’s track record — each relationship presented as it is.',
    pt: 'Clientes diretos, atuação por meio de parceiros e a trajetória do fundador — cada relação apresentada como ela é.',
  },
  'clients.sergipe.name': { en: 'Government of Sergipe', pt: 'Governo de Sergipe' },
  'clients.sergipe.relation': { en: 'Direct client · Public sector', pt: 'Cliente direto · Setor público' },
  'clients.sergipe.desc': { en: 'Urban Land Regularization system and field app', pt: 'Sistema e app de Regularização Fundiária Urbana' },
  'clients.cenexel.name': { en: 'Cenexel', pt: 'Cenexel' },
  'clients.cenexel.relation': { en: 'Via Nortal / Nearsure · USA', pt: 'Via Nortal / Nearsure · EUA' },
  'clients.cenexel.desc': { en: 'Healthcare and clinical research', pt: 'Saúde e pesquisa clínica' },
  'clients.realpage.name': { en: 'Real Page', pt: 'Real Page' },
  'clients.realpage.relation': { en: 'Via Code1 · USA', pt: 'Via Code1 · EUA' },
  'clients.realpage.desc': { en: 'Real estate technology', pt: 'Tecnologia imobiliária' },
  'clients.pwn.name': { en: 'PWN Health', pt: 'PWN Health' },
  'clients.pwn.relation': { en: 'Via Jaya · USA', pt: 'Via Jaya · EUA' },
  'clients.pwn.desc': { en: 'HIPAA-compliant health platform', pt: 'Plataforma de saúde em conformidade com HIPAA' },
  'clients.crably.name': { en: 'Crably', pt: 'Crably' },
  'clients.crably.relation': { en: 'Cofounded startup · Denmark', pt: 'Startup cofundada · Dinamarca' },
  'clients.crably.desc': { en: 'Operations across Scandinavia, Germany and Europe', pt: 'Operação na Escandinávia, Alemanha e Europa' },
  'clients.strip': { en: '7+ countries served · International operations since 2017', pt: '7+ países atendidos · Atuação internacional desde 2017' },

  // Solutions
  'solutions.label': { en: 'Solutions', pt: 'Soluções' },
  'solutions.title': { en: 'What we', pt: 'O que' },
  'solutions.title_highlight': { en: 'deliver', pt: 'entregamos' },
  'solutions.description': {
    en: 'Three fronts of work, one standard of engineering: software that solves real problems and keeps running.',
    pt: 'Três frentes de atuação, um único padrão de engenharia: software que resolve problemas reais e continua operando.',
  },
  'solutions.eng.title': { en: 'Software engineering & digital products', pt: 'Engenharia de software e produtos digitais' },
  'solutions.eng.desc': {
    en: 'Design and development of web and mobile products for companies that need reliable software — from architecture to production.',
    pt: 'Desenho e desenvolvimento de produtos web e mobile para empresas que precisam de software confiável — da arquitetura à produção.',
  },
  'solutions.eng.cap1': { en: 'Full-stack web and mobile development', pt: 'Desenvolvimento full-stack web e mobile' },
  'solutions.eng.cap2': { en: 'Scalable architecture and cloud infrastructure', pt: 'Arquitetura escalável e infraestrutura em nuvem' },
  'solutions.eng.cap3': { en: 'Technical leadership and team enablement', pt: 'Liderança técnica e capacitação de times' },
  'solutions.gov.title': { en: 'Systems & apps for the public sector', pt: 'Sistemas e aplicativos para o setor público' },
  'solutions.gov.desc': {
    en: 'Digital solutions for government programs — like the Urban Land Regularization system and field app built for the Government of Sergipe.',
    pt: 'Soluções digitais para programas de governo — como o sistema e o aplicativo de campo de Regularização Fundiária Urbana construídos para o Governo de Sergipe.',
  },
  'solutions.gov.cap1': { en: 'Management systems for public programs', pt: 'Sistemas de gestão para programas públicos' },
  'solutions.gov.cap2': { en: 'Mobile apps for field agents', pt: 'Aplicativos mobile para agentes de campo' },
  'solutions.gov.cap3': { en: 'End-to-end delivery, from survey to documents', pt: 'Entrega completa, do levantamento à emissão de documentos' },
  'solutions.auto.title': { en: 'Automation & operations integration', pt: 'Automação e integração de operações' },
  'solutions.auto.desc': {
    en: 'AI agents and integrations that organize demands, answer people and connect tools — reducing operational noise where work already happens.',
    pt: 'Agentes de IA e integrações que organizam demandas, atendem pessoas e conectam ferramentas — reduzindo ruído operacional onde o trabalho já acontece.',
  },
  'solutions.auto.cap1': { en: 'Conversational AI agents on WhatsApp', pt: 'Agentes conversacionais de IA no WhatsApp' },
  'solutions.auto.cap2': { en: 'Workflow and systems integration', pt: 'Integração de fluxos e sistemas' },
  'solutions.auto.cap3': { en: 'Content and operations automation', pt: 'Automação de conteúdo e de operações' },

  // Products
  'products.label': { en: 'Own Products', pt: 'Produtos Próprios' },
  'products.title': { en: 'Products built', pt: 'Produtos construídos' },
  'products.title_highlight': { en: 'by us', pt: 'por nós' },
  'products.description': {
    en: 'Operational intelligence, automation and digital health — products we design, build and operate.',
    pt: 'Inteligência operacional, automação e saúde digital — produtos que desenhamos, construímos e operamos.',
  },
  'products.mission.tag': { en: 'AI Company as a Service', pt: 'Empresa de IA como Serviço' },
  'products.mission.name': { en: 'Mission Control', pt: 'Mission Control' },
  'products.mission.subtitle': { en: 'An entire AI company at your command', pt: 'Uma empresa inteira de IA ao seu comando' },
  'products.mission.description': {
    en: 'Mission Control is an entire AI company: specialized agents in marketing, content, design, customer service and operations working together like a real team — and you run it all from a single dashboard.',
    pt: 'O Mission Control é uma empresa inteira de IA. São agentes especializados em marketing, conteúdo, design, atendimento e operações que trabalham juntos como um time de verdade, e você comanda tudo de um só painel.',
  },
  'products.mission.benefit1': { en: 'Full departments built from AI agents', pt: 'Departamentos completos formados por agentes de IA' },
  'products.mission.benefit2': { en: 'Tasks distributed, executed and delivered automatically', pt: 'Tarefas distribuídas, executadas e entregues no automático' },
  'products.mission.benefit3': { en: 'You approve, track and decide in real time', pt: 'Você aprova, acompanha e decide em tempo real' },
  'products.mission.cta': { en: 'Discover Mission Control', pt: 'Conhecer o Mission Control' },
  'products.vacinapp.tag': { en: 'Public Health App', pt: 'App de Saúde Pública' },
  'products.vacinapp.name': { en: 'VacinApp Brasil', pt: 'VacinApp Brasil' },
  'products.vacinapp.subtitle': { en: 'Vaccination reminders for families', pt: 'Lembretes de vacinação para famílias' },
  'products.vacinapp.description': {
    en: 'VacinApp helps parents keep their children’s vaccination schedule on track. Free app with alerts, digital history and offline access — already protecting more than 3,000 families in Brazil.',
    pt: 'O VacinApp ajuda pais a manter a caderneta de vacinação dos filhos em dia. Aplicativo gratuito com alertas, histórico digital e acesso offline — já protege mais de 3 mil famílias no Brasil.',
  },
  'products.vacinapp.benefit1': { en: 'Automatic alerts for every vaccine dose', pt: 'Alertas automáticos para cada dose' },
  'products.vacinapp.benefit2': { en: 'Complete SUS + private calendar', pt: 'Calendário completo do SUS + particular' },
  'products.vacinapp.benefit3': { en: 'Saved history and offline access', pt: 'Histórico salvo e acesso offline' },
  'products.vacinapp.cta': { en: 'Download VacinApp', pt: 'Baixar o VacinApp' },
  'products.footnote': { en: 'We build products that operate, not just software that runs.', pt: 'Construímos produtos que operam, não apenas software que executa.' },

  // Experience
  'exp.label': { en: 'Experience', pt: 'Experiência' },
  'exp.title': { en: 'A track record across', pt: 'Uma trajetória entre' },
  'exp.title_highlight': { en: 'borders', pt: 'fronteiras' },
  'exp.description': {
    en: 'Deliveries for American and European companies and for the Brazilian public sector — from cofounding a startup to enterprise and government solutions.',
    pt: 'Entregas para empresas dos EUA e da Europa e para o setor público brasileiro — da cofundação de uma startup a soluções enterprise e de governo.',
  },
  'exp.current': { en: 'Current', pt: 'Atual' },
  'exp.previous': { en: 'Previous', pt: 'Anterior' },
  'exp.company_delivery': { en: 'TSoftwares delivery', pt: 'Entrega TSoftwares' },
  'exp.founder_track': { en: 'Founder’s track record', pt: 'Trajetória do fundador' },

  'exp.thiesse.role': { en: 'System & Mobile App Development', pt: 'Desenvolvimento de Sistema e Aplicativo Mobile' },
  'exp.thiesse.location': { en: 'Sergipe, Brazil', pt: 'Sergipe, Brasil' },
  'exp.thiesse.client': { en: 'Government of the State of Sergipe', pt: 'Governo do Estado de Sergipe' },
  'exp.thiesse.clientDesc': { en: 'Urban Land Regularization', pt: 'Regularização Fundiária Urbana' },
  'exp.thiesse.highlight1': { en: 'Management system for the state Urban Land Regularization program', pt: 'Sistema de gestão para o programa estadual de Regularização Fundiária Urbana' },
  'exp.thiesse.highlight2': { en: 'Mobile and tablet app for field agents (inspections and registrations)', pt: 'Aplicativo mobile e tablet para agentes de campo (vistorias e cadastros)' },
  'exp.thiesse.highlight3': { en: 'End-to-end solution, from field survey to document issuance', pt: 'Solução completa, do levantamento em campo à emissão de documentos' },

  'exp.nortal.role': { en: 'Tech Lead / Senior Software Engineer', pt: 'Tech Lead / Engenheiro de Software Sênior' },
  'exp.nortal.location': { en: 'Remote — US Client', pt: 'Remoto — Cliente nos EUA' },
  'exp.nortal.clientDesc': { en: 'Health and Clinical Research', pt: 'Saúde e Pesquisa Clínica' },
  'exp.nortal.highlight1': { en: 'Direct work with a US-based healthcare company', pt: 'Atuação direta com empresa de saúde sediada nos EUA' },
  'exp.nortal.highlight2': { en: 'Building scalable solutions for clinical research', pt: 'Construção de soluções escaláveis para pesquisa clínica' },
  'exp.nortal.highlight3': { en: 'Full-stack development with modern technologies', pt: 'Desenvolvimento full-stack com tecnologias modernas' },

  'exp.code1.role': { en: 'Engineering Manager / Senior Software Engineer', pt: 'Engineering Manager / Engenheiro de Software Sênior' },
  'exp.code1.location': { en: 'Remote — US Client', pt: 'Remoto — Cliente nos EUA' },
  'exp.code1.clientDesc': { en: 'Real Estate Technology', pt: 'Tecnologia para o Mercado Imobiliário' },
  'exp.code1.highlight1': { en: 'Enterprise real estate solutions for the US market', pt: 'Soluções corporativas de mercado imobiliário para o mercado americano' },
  'exp.code1.highlight2': { en: 'High-scale applications serving millions of users', pt: 'Aplicações de alta escala servindo milhões de usuários' },
  'exp.code1.highlight3': { en: 'Collaborative work with distributed teams', pt: 'Trabalho colaborativo com times distribuídos' },

  'exp.crably.role': { en: 'Cofounder and CTO', pt: 'Cofundador e CTO' },
  'exp.crably.location': { en: 'Copenhagen, Denmark', pt: 'Copenhague, Dinamarca' },
  'exp.crably.client': { en: 'European Expansion', pt: 'Expansão Europeia' },
  'exp.crably.clientDesc': { en: 'Scandinavia, Germany, Portugal, Spain and others', pt: 'Escandinávia, Alemanha, Portugal, Espanha e outros' },
  'exp.crably.highlight1': { en: 'Founded and scaled a technology startup', pt: 'Fundação e escala de uma startup de tecnologia' },
  'exp.crably.highlight2': { en: 'Expanded operations across several European countries', pt: 'Expansão das operações por diversos países europeus' },
  'exp.crably.highlight3': { en: 'Built and led engineering teams', pt: 'Formação e liderança de times de engenharia' },

  'exp.jaya.role': { en: 'Software Engineer', pt: 'Engenheiro de Software' },
  'exp.jaya.location': { en: 'Remote — US Client', pt: 'Remoto — Cliente nos EUA' },
  'exp.jaya.clientDesc': { en: 'Health Technology', pt: 'Tecnologia para Saúde' },
  'exp.jaya.highlight1': { en: 'Development of a health platform', pt: 'Desenvolvimento de plataforma de saúde' },
  'exp.jaya.highlight2': { en: 'HIPAA-compliant solutions', pt: 'Soluções em conformidade com HIPAA' },
  'exp.jaya.highlight3': { en: 'Integration with US healthcare systems', pt: 'Integração com sistemas de saúde dos EUA' },

  // About
  'about.label': { en: 'About TSoftwares', pt: 'Sobre a TSoftwares' },
  'about.title': { en: 'International engineering,', pt: 'Engenharia internacional,' },
  'about.title_highlight': { en: 'Brazilian roots', pt: 'raízes brasileiras' },
  'about.p1': {
    en: 'TSoftwares was born from more than 20 years of software development — 9 of them serving international clients in the demanding standards of the American and European markets.',
    pt: 'A TSoftwares nasce de mais de 20 anos de desenvolvimento de software — 9 deles atendendo clientes internacionais nos padrões exigentes dos mercados americano e europeu.',
  },
  'about.p2': {
    en: 'Our history includes cofounding a tech startup in Denmark, from where we expanded operations across Scandinavia, Germany and other European countries. This entrepreneurial experience shapes how we build products that scale across markets and cultures.',
    pt: 'Nossa trajetória inclui a cofundação de uma startup de tecnologia na Dinamarca, a partir da qual expandimos operações pela Escandinávia, Alemanha e outros países da Europa. Essa vivência empreendedora orienta como construímos produtos que escalam entre mercados e culturas.',
  },
  'about.p3': {
    en: 'Today we partner with leading American companies in healthcare, real estate and enterprise — and we work alongside the Government of the State of Sergipe, developing the system and mobile app for the state Urban Land Regularization program.',
    pt: 'Hoje atuamos em parceria com empresas americanas líderes nos setores de saúde, mercado imobiliário e tecnologia — e trabalhamos junto ao Governo do Estado de Sergipe, desenvolvendo o sistema e o aplicativo mobile do programa estadual de Regularização Fundiária Urbana.',
  },
  'about.founder_name': { en: 'Davi Thiesse', pt: 'Davi Thiesse' },
  'about.founder_role': { en: 'Founder & Technical Leadership', pt: 'Fundador & Liderança Técnica' },

  // Stats
  'stat.years_exp': { en: 'Years in the Market', pt: 'Anos de Mercado' },
  'stat.intl_exp': { en: 'International Years', pt: 'Anos Internacionais' },
  'stat.countries': { en: 'Countries Served', pt: 'Países Atendidos' },
  'stat.startup': { en: 'Startup Cofounded', pt: 'Startup Cofundada' },

  // Highlights
  'highlight.global.title': { en: 'Global Reach', pt: 'Alcance Global' },
  'highlight.global.desc': {
    en: 'Serving American and European companies since 2017, delivering solutions across multiple time zones.',
    pt: 'Atendemos empresas nos EUA e na Europa desde 2017, com entrega de soluções em múltiplos fusos horários.',
  },
  'highlight.publicsector.title': { en: 'Public Sector', pt: 'Setor Público' },
  'highlight.publicsector.desc': {
    en: 'Partner of the Government of the State of Sergipe in developing the system and mobile app for the Urban Land Regularization program.',
    pt: 'Parceiros do Governo do Estado de Sergipe no desenvolvimento do sistema e do aplicativo mobile para o programa de Regularização Fundiária Urbana.',
  },
  'highlight.tech.title': { en: 'Technical Excellence', pt: 'Excelência Técnica' },
  'highlight.tech.desc': {
    en: 'Full-stack expertise focused on scalable architectures and modern technologies.',
    pt: 'Expertise full-stack com foco em arquiteturas escaláveis e tecnologias modernas.',
  },
  'highlight.enterprise.title': { en: 'Enterprise Clients', pt: 'Clientes Enterprise' },
  'highlight.enterprise.desc': {
    en: 'Trusted by leading US companies in healthcare and real estate.',
    pt: 'Empresas americanas líderes nos setores de saúde e mercado imobiliário confiam em nós.',
  },

  // Testimonials
  'testimonials.label': { en: 'Recommendations', pt: 'Depoimentos' },
  'testimonials.title': { en: 'What clients and', pt: 'O que clientes e' },
  'testimonials.title_highlight': { en: 'colleagues say', pt: 'colegas dizem' },
  'testimonials.description': {
    en: 'Recommendations published on LinkedIn by managers, clients and teammates from the American and European projects we took part in.',
    pt: 'Recomendações publicadas no LinkedIn por gestores, clientes e colegas dos projetos americanos e europeus em que atuamos.',
  },
  'testimonials.read_more': { en: 'Read full recommendation', pt: 'Ler depoimento completo' },
  'testimonials.read_less': { en: 'Show less', pt: 'Mostrar menos' },
  'testimonials.source': { en: 'See all recommendations on LinkedIn', pt: 'Ver todas as recomendações no LinkedIn' },

  'testimonials.brett.role': {
    en: 'VP of Platform Enablement @ CenExel | Former CTO',
    pt: 'VP de Platform Enablement @ CenExel | Ex-CTO',
  },
  'testimonials.brett.relation': {
    en: 'February 7, 2026 · Brett managed Davi directly',
    pt: '7 de fevereiro de 2026 · Brett gerenciava o Davi diretamente',
  },
  'testimonials.brett.text': {
    en: "I highly recommend Davi as an engineering leader and team lead. I had the pleasure of working alongside Davi for a year while he led our mobile app development team, and his impact was immediate and lasting.\n\nDavi brought much-needed structure and discipline to our development workflows. He established Git flows and branching strategies that improved our team's efficiency and code quality. Davi also architected entirely new Azure environments from scratch, implementing containerized applications, firewalls, and user access controls to secure our VPNs. His infrastructure work resulted in significant annual cost savings for the organization.\n\nBeyond his technical contributions, Davi is an exceptional people leader. He held consistent 1:1s with team members and took a genuine interest in their growth. His mentorship of junior developers stood out to me. He invested the time to help them level up and become stronger contributors. This dedication to developing others is what sets Davi apart.\n\nDavi is friendly, hardworking, and gets the job done. I highly recommend him for any engineering management or team lead role. Any team would greatly benefit from his leadership, technical expertise, and commitment to building strong engineering culture. I hope to have the opportunity to work with him again.",
    pt: "Recomendo amplamente o Davi como líder de engenharia e tech lead. Tive o prazer de trabalhar ao lado do Davi por um ano, enquanto ele liderava nossa equipe de desenvolvimento de aplicativos mobile, e o impacto dele foi imediato e duradouro.\n\nO Davi trouxe a estrutura e a disciplina que nossos fluxos de desenvolvimento tanto precisavam. Ele estabeleceu fluxos de Git e estratégias de branching que melhoraram a eficiência e a qualidade do código da equipe. Também arquitetou do zero novos ambientes no Azure, com aplicações conteinerizadas, firewalls e controles de acesso de usuário para proteger nossas VPNs. Seu trabalho de infraestrutura resultou em uma economia anual significativa para a organização.\n\nAlém das contribuições técnicas, o Davi é um líder de pessoas excepcional. Mantinha 1:1s constantes com os integrantes da equipe e tinha interesse genuíno no crescimento de cada um. A mentoria que oferecia aos desenvolvedores juniores me chamou muito a atenção: ele investia tempo para ajudá-los a evoluir e se tornarem contribuidores mais fortes. Essa dedicação a desenvolver os outros é o que diferencia o Davi.\n\nO Davi é simpático, trabalhador e entrega o que propõe. Recomendo amplamente para qualquer posição de gestão de engenharia ou tech lead. Qualquer equipe se beneficiaria muito da sua liderança, da sua expertise técnica e do seu compromisso em construir uma cultura de engenharia sólida. Espero ter a oportunidade de trabalhar com ele novamente.",
  },

  'testimonials.marcelo.role': {
    en: 'Senior Software Engineer | Tech Lead | Ruby on Rails since 2010',
    pt: 'Engenheiro de Software Sênior | Tech Lead | Ruby on Rails desde 2010',
  },
  'testimonials.marcelo.relation': {
    en: 'May 31, 2024 · Marcelo worked with Davi on the same team',
    pt: '31 de maio de 2024 · Marcelo trabalhou com o Davi na mesma equipe',
  },
  'testimonials.marcelo.text': {
    en: "I am pleased to recommend Davi Thiesse, an exceptional professional with whom I worked at Code1. Davi stood out as a trusted individual within our company and among our clients. He led teams with a human approach, always committed to the well-being and success of each team member. His ability to build trust was fundamental to the success of our projects.\n\nAs a leader, Davi was a beacon of excellent management skills, always prioritizing the mental health of his team. His proactive efforts to secure partnerships, such as with Zenklub, for the collective well-being of the team were commendable. Moreover, he consistently brought up management topics centered on people, fostering a healthy and productive work environment.\n\nDavi is a dedicated, reliable, and deeply human person. He always strives to deliver what is proposed, putting his heart and mind into everything he does. His dedication and commitment to the team are inspiring, making him a precious leader.",
    pt: "Fico feliz em recomendar o Davi Thiesse, um profissional excepcional com quem trabalhei na Code1. O Davi se destacou como uma pessoa de confiança dentro da nossa empresa e entre os nossos clientes. Ele liderava equipes com uma abordagem humana, sempre comprometido com o bem-estar e o sucesso de cada integrante. Sua capacidade de construir confiança foi fundamental para o sucesso dos nossos projetos.\n\nComo líder, o Davi foi um exemplo de excelentes habilidades de gestão, priorizando sempre a saúde mental da equipe. Seus esforços proativos para firmar parcerias, como com o Zenklub, em prol do bem-estar coletivo, foram dignos de nota. Além disso, ele sempre trazia temas de gestão centrados nas pessoas, promovendo um ambiente de trabalho saudável e produtivo.\n\nO Davi é uma pessoa dedicada, confiável e profundamente humana. Ele sempre busca entregar aquilo que se propõe, colocando coração e mente em tudo o que faz. Sua dedicação e seu compromisso com a equipe são inspiradores, o que o torna um líder precioso.",
  },

  'testimonials.ernie.role': {
    en: 'Engineering Leader | Marketing Technology, AI/ML & Analytics Architecture',
    pt: 'Líder de Engenharia | Marketing Technology, AI/ML & Arquitetura de Analytics',
  },
  'testimonials.ernie.relation': {
    en: 'May 31, 2024 · Ernie was Davi\'s client',
    pt: '31 de maio de 2024 · Ernie foi cliente do Davi',
  },
  'testimonials.ernie.text': {
    en: "Davi was a software engineer on one of my Ruby/Rails/Vue software engineering teams for about two years. During our time working together, Davi was able to rapidly spin up and contribute heavily on a large variety of different applications which the team maintained. He worked in conjunction with our US based team to deliver software products in the marketing analytics space.\n\nDavi delivered projects around Call Tracking, Analytics report delivery, Built custom UI's for report visualization, Integrated our back end systems with a new parent companies systems, and performed much maintenance on existing systems including bug fixing, enhancements, version upgrades and troubleshooting.\n\nWhat I really liked about working with Davi is his ability to organize the developers that he's working with. He's an effective team leader who collaborates across his group and often pairs with other developers to make sure that projects are moving forward. I recommend Davi for engineering team roles from individual contributor to team lead.",
    pt: "O Davi foi engenheiro de software em uma das minhas equipes de engenharia Ruby/Rails/Vue por cerca de dois anos. Durante o tempo em que trabalhamos juntos, ele conseguiu se ambientar muito rápido e contribuir de forma intensa em uma grande variedade de aplicações mantidas pela equipe. Trabalhou em conjunto com nossa equipe baseada nos EUA para entregar produtos de software na área de marketing analytics.\n\nO Davi entregou projetos de Call Tracking, entrega de relatórios de analytics, construção de interfaces customizadas para visualização de relatórios, integração dos nossos sistemas de back-end com os sistemas da nova empresa controladora, além de muita manutenção em sistemas existentes, incluindo correção de bugs, melhorias, upgrades de versão e troubleshooting.\n\nO que eu realmente gostei de trabalhar com o Davi foi sua capacidade de organizar os desenvolvedores ao seu redor. Ele é um líder de equipe eficaz, que colabora por todo o grupo e frequentemente faz pair programming com outros desenvolvedores para garantir que os projetos avancem. Recomendo o Davi para posições em equipes de engenharia, de contribuidor individual a tech lead.",
  },

  // Contact
  'contact.label': { en: 'Contact', pt: 'Contato' },
  'contact.title': { en: "Let's build your", pt: 'Vamos construir seu' },
  'contact.title_highlight': { en: 'next product?', pt: 'próximo produto?' },
  'contact.description': {
    en: 'Whether it is an international project, a public sector initiative or a product of your own — the simplest way to start is a conversation.',
    pt: 'Seja um projeto internacional, uma iniciativa do setor público ou um produto próprio — o caminho mais simples para começar é uma conversa.',
  },
  'contact.whatsapp': { en: 'Chat on WhatsApp', pt: 'Falar no WhatsApp' },
  'contact.email': { en: 'Send an email', pt: 'Enviar e-mail' },
  'contact.linkedin': { en: 'Connect on LinkedIn', pt: 'Conectar no LinkedIn' },
  'contact.location': { en: 'Based in Brazil', pt: 'Base no Brasil' },
  'contact.location_desc': { en: 'Available for US, European and Brazilian time zones', pt: 'Disponíveis para os fusos horários dos EUA, da Europa e do Brasil' },
  'contact.availability': { en: 'Availability', pt: 'Disponibilidade' },
  'contact.availability_desc': { en: 'Open to new projects', pt: 'Abertos a novos projetos' },

  // Links (Instagram bio page)
  'links.meta_description': {
    en: 'TSoftwares — custom software, AI automation and digital products. Talk to us on WhatsApp or explore our products.',
    pt: 'TSoftwares — software sob medida, automação com IA e produtos digitais. Fale conosco no WhatsApp ou conheça nossos produtos.',
  },
  'links.tagline': {
    en: 'Custom software, AI automation and digital products — Brazil, USA & Europe.',
    pt: 'Software sob medida, automação com IA e produtos digitais — Brasil, EUA e Europa.',
  },
  'links.nav_label': { en: 'Featured links', pt: 'Links em destaque' },
  'links.whatsapp.title': { en: 'Chat on WhatsApp', pt: 'Falar no WhatsApp' },
  'links.whatsapp.subtitle': { en: 'Talk directly with our founder', pt: 'Converse diretamente com o fundador' },
  'links.mission.title': { en: 'Mission Control', pt: 'Mission Control' },
  'links.mission.subtitle': { en: 'An entire AI company at your command', pt: 'Uma empresa inteira de IA ao seu comando' },
  'links.vacinapp.title': { en: 'VacinApp Brasil', pt: 'VacinApp Brasil' },
  'links.vacinapp.subtitle': { en: 'Vaccination reminders for 3,000+ families', pt: 'Lembretes de vacinação para mais de 3 mil famílias' },
  'links.site.title': { en: 'Official website', pt: 'Site oficial' },
  'links.site.subtitle': { en: 'Solutions, experience and cases', pt: 'Soluções, experiência e cases' },

  // Footer
  'footer.company': { en: 'Software engineering with a global vision', pt: 'Engenharia de software com visão global' },
  'footer.rights': { en: 'All rights reserved.', pt: 'Todos os direitos reservados.' },
  'footer.markets': { en: 'Brazil · USA · Europe — since 2017', pt: 'Brasil · EUA · Europa — desde 2017' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
