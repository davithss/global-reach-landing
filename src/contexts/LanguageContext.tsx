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
  'nav.about': { en: 'About', pt: 'Sobre' },
  'nav.experience': { en: 'Experience', pt: 'Experiência' },
  'nav.products': { en: 'Products', pt: 'Produtos' },
  'nav.clients': { en: 'Clients', pt: 'Clientes' },
  'nav.testimonials': { en: 'Recommendations', pt: 'Depoimentos' },
  'nav.contact': { en: 'Get in Touch', pt: 'Contato' },
  
  // Hero
  'hero.badge': { en: 'Software Development Company', pt: 'Empresa de Desenvolvimento de Software' },
  'hero.subtitle': { en: 'International Projects & Public Sector Solutions', pt: 'Projetos Internacionais & Soluções para o Setor Público' },
  'hero.description': {
    en: 'We build high-quality software for the American and European markets, and for the Brazilian public sector, since 2017. We combine international experience in healthcare, real estate and enterprise with solutions for government.',
    pt: 'Desenvolvemos software de alto nível para os mercados dos EUA e da Europa e para o setor público brasileiro desde 2017. Unimos experiência internacional em saúde, mercado imobiliário e empresas de tecnologia à entrega de soluções para o governo.',
  },
  'hero.markets': { en: 'USA, Europe & Brazil', pt: 'EUA, Europa & Brasil' },
  'hero.years_intl': { en: 'Years International Experience', pt: 'Anos de Experiência Internacional' },
  'hero.years_total': { en: 'Years in the Market', pt: 'Anos de Mercado' },
  'hero.cta': { en: 'Get in Touch', pt: 'Fale Conosco' },
  'hero.badge_us': { en: 'USA', pt: 'EUA' },
  'hero.badge_br': { en: 'Brazil', pt: 'Brasil' },
  'hero.badge_eu': { en: 'Europe', pt: 'Europa' },
  'hero.badge_since': { en: 'Since 2017', pt: 'Desde 2017' },
  
  // About
  'about.label': { en: 'About Us', pt: 'Sobre Nós' },
  'about.title': { en: 'Bridging Continents Through', pt: 'Conectando Continentes Através da' },
  'about.title_highlight': { en: 'Technology', pt: 'Tecnologia' },
  'about.p1': {
    en: 'With more than 18 years in software development and 8 years serving international clients, we build robust solutions that meet the demanding standards of both the American and European markets.',
    pt: 'Com mais de 18 anos em desenvolvimento de software e 8 anos atendendo clientes internacionais, construímos soluções robustas que atendem aos padrões exigentes dos mercados dos EUA e da Europa.',
  },
  'about.p2': {
    en: 'Our history includes cofounding a tech startup in Denmark, from where we expanded operations across Scandinavia, Germany and other European countries. This entrepreneurial experience gives us a unique perspective on building products that scale across different markets and cultures.',
    pt: 'Nossa trajetória inclui a cofundação de uma startup de tecnologia na Dinamarca, a partir da qual expandimos operações pela Escandinávia, Alemanha e outros países da Europa. Essa vivência empreendedora nos dá uma visão única sobre construir produtos que escalam por diferentes mercados e culturas.',
  },
  'about.p3': {
    en: 'Today, through Thiesse Softwares, we partner with leading American companies in healthcare, real estate and enterprise sectors — and we are proud to work alongside the Government of the State of Sergipe, developing the system and mobile app for the state Urban Land Regularization program.',
    pt: 'Hoje, por meio da Thiesse Softwares, atuamos em parceria com empresas americanas líderes nos setores de saúde, mercado imobiliário e tecnologia — e temos orgulho de trabalhar junto ao Governo do Estado de Sergipe, desenvolvendo o sistema e o aplicativo mobile do programa estadual de Regularização Fundiária Urbana.',
  },
  'about.speaker': { en: 'Tech Talks & Mentorship', pt: 'Palestras e Mentoria' },
  'about.speaker_desc': { en: 'Sharing knowledge about working internationally', pt: 'Compartilhando conhecimento sobre atuação internacional' },
  
  // Stats
  'stat.years_exp': { en: 'Years in the Market', pt: 'Anos de Mercado' },
  'stat.intl_exp': { en: 'International Years', pt: 'Anos Internacionais' },
  'stat.countries': { en: 'Countries Served', pt: 'Países Atendidos' },
  'stat.us_clients': { en: 'Major US Clients', pt: 'Clientes nos EUA' },
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
  
  // Experience
  'exp.label': { en: 'Company Journey', pt: 'Nossa Trajetória' },
  'exp.title': { en: 'International', pt: 'Experiência' },
  'exp.title_highlight': { en: 'Experience', pt: 'Internacional' },
  'exp.description': {
    en: 'A track record of quality delivery for American and European companies and for the Brazilian public sector — from cofounding a startup to enterprise and government solutions.',
    pt: 'Um histórico de entregas de qualidade para empresas dos EUA e da Europa e para o setor público brasileiro — da cofundação de uma startup a soluções enterprise e de governo.',
  },
  'exp.current': { en: 'Current', pt: 'Atual' },
  'exp.previous': { en: 'Previous', pt: 'Anterior' },

  // Experience items — Thiesse Software / Governo de Sergipe
  'exp.thiesse.role': { en: 'System & Mobile App Development', pt: 'Desenvolvimento de Sistema e Aplicativo Mobile' },
  'exp.thiesse.location': { en: 'Sergipe, Brazil', pt: 'Sergipe, Brasil' },
  'exp.thiesse.client': { en: 'Government of the State of Sergipe', pt: 'Governo do Estado de Sergipe' },
  'exp.thiesse.clientDesc': { en: 'Urban Land Regularization', pt: 'Regularização Fundiária Urbana' },
  'exp.thiesse.highlight1': { en: 'Management system for the state Urban Land Regularization program', pt: 'Sistema de gestão para o programa estadual de Regularização Fundiária Urbana' },
  'exp.thiesse.highlight2': { en: 'Mobile and tablet app for field agents (inspections and registrations)', pt: 'Aplicativo mobile e tablet para agentes de campo (vistorias e cadastros)' },
  'exp.thiesse.highlight3': { en: 'End-to-end solution, from field survey to document issuance', pt: 'Solução completa, do levantamento em campo à emissão de documentos' },

  // Experience items — Nortal / Nearsure
  'exp.nortal.role': { en: 'Tech Lead / Senior Software Engineer', pt: 'Tech Lead / Engenheiro de Software Sênior' },
  'exp.nortal.location': { en: 'Remote — US Client', pt: 'Remoto — Cliente nos EUA' },
  'exp.nortal.clientDesc': { en: 'Health and Clinical Research', pt: 'Saúde e Pesquisa Clínica' },
  'exp.nortal.highlight1': { en: 'Direct work with a US-based healthcare company', pt: 'Atuação direta com empresa de saúde sediada nos EUA' },
  'exp.nortal.highlight2': { en: 'Building scalable solutions for clinical research', pt: 'Construção de soluções escaláveis para pesquisa clínica' },
  'exp.nortal.highlight3': { en: 'Full-stack development with modern technologies', pt: 'Desenvolvimento full-stack com tecnologias modernas' },

  // Experience items — Code1
  'exp.code1.role': { en: 'Engineering Manager / Senior Software Engineer', pt: 'Engineering Manager / Engenheiro de Software Sênior' },
  'exp.code1.location': { en: 'Remote — US Client', pt: 'Remoto — Cliente nos EUA' },
  'exp.code1.clientDesc': { en: 'Real Estate Technology', pt: 'Tecnologia para o Mercado Imobiliário' },
  'exp.code1.highlight1': { en: 'Enterprise real estate solutions for the US market', pt: 'Soluções corporativas de mercado imobiliário para o mercado americano' },
  'exp.code1.highlight2': { en: 'High-scale applications serving millions of users', pt: 'Aplicações de alta escala servindo milhões de usuários' },
  'exp.code1.highlight3': { en: 'Collaborative work with distributed teams', pt: 'Trabalho colaborativo com times distribuídos' },

  // Experience items — Crably
  'exp.crably.role': { en: 'Cofounder and CTO', pt: 'Cofundador e CTO' },
  'exp.crably.location': { en: 'Copenhagen, Denmark', pt: 'Copenhague, Dinamarca' },
  'exp.crably.client': { en: 'European Expansion', pt: 'Expansão Europeia' },
  'exp.crably.clientDesc': { en: 'Scandinavia, Germany, Portugal, Spain and others', pt: 'Escandinávia, Alemanha, Portugal, Espanha e outros' },
  'exp.crably.highlight1': { en: 'Founded and scaled a technology startup', pt: 'Fundação e escala de uma startup de tecnologia' },
  'exp.crably.highlight2': { en: 'Expanded operations across several European countries', pt: 'Expansão das operações por diversos países europeus' },
  'exp.crably.highlight3': { en: 'Built and led engineering teams', pt: 'Formação e liderança de times de engenharia' },

  // Experience items — Jaya
  'exp.jaya.role': { en: 'Software Engineer', pt: 'Engenheiro de Software' },
  'exp.jaya.location': { en: 'Remote — US Client', pt: 'Remoto — Cliente nos EUA' },
  'exp.jaya.clientDesc': { en: 'Health Technology', pt: 'Tecnologia para Saúde' },
  'exp.jaya.highlight1': { en: 'Development of a health platform', pt: 'Desenvolvimento de plataforma de saúde' },
  'exp.jaya.highlight2': { en: 'HIPAA-compliant solutions', pt: 'Soluções em conformidade com HIPAA' },
  'exp.jaya.highlight3': { en: 'Integration with US healthcare systems', pt: 'Integração com sistemas de saúde dos EUA' },
  
  // Products
  'products.label': { en: 'Products', pt: 'Produtos' },
  'products.title': { en: 'Our', pt: 'Nossos' },
  'products.title_highlight': { en: 'Products', pt: 'Produtos' },
  'products.description': {
    en: 'Operational intelligence, automation and digital health solutions built to scale workflows for public managers, operational teams and families.',
    pt: 'Soluções de inteligência operacional, automação e saúde digital construídas para escalar fluxos de trabalho de gestores públicos, equipes operacionais e famílias.',
  },
  'products.ops.tag': { en: 'WhatsApp Agent', pt: 'Agente WhatsApp' },
  'products.ops.name': { en: 'OpsAgent', pt: 'OpsAgent' },
  'products.ops.subtitle': { en: 'Conversational Agent for Operations', pt: 'Agente Conversacional para Operações' },
  'products.ops.description': {
    en: 'OpsAgent is a conversational agent via WhatsApp for public managers, directors and operational teams. It answers, guides, collects information, organizes demands and supports internal workflows directly on WhatsApp, reducing operational noise and accelerating decisions.',
    pt: 'O OpsAgent é um agente conversacional via WhatsApp para gestores públicos, diretores e equipes operacionais. Atende, orienta, coleta informações, organiza demandas e apoia fluxos internos diretamente pelo WhatsApp, reduzindo ruído operacional e acelerando decisões.',
  },
  'products.ops.benefit1': { en: 'Service and triage via WhatsApp', pt: 'Atendimento e triagem via WhatsApp' },
  'products.ops.benefit2': { en: 'Real-time demand organization', pt: 'Organização de demandas em tempo real' },
  'products.ops.benefit3': { en: 'Support for public managers and operational teams', pt: 'Apoio a gestores públicos e equipes operacionais' },
  'products.ops.cta': { en: 'Discover OpsAgent', pt: 'Conhecer o OpsAgent' },
  'products.vacinapp.tag': { en: 'Public Health App', pt: 'App de Saúde Pública' },
  'products.vacinapp.name': { en: 'VacinApp Brasil', pt: 'VacinApp Brasil' },
  'products.vacinapp.subtitle': { en: 'Vaccination Reminders for Families', pt: 'Lembretes de Vacinação para Famílias' },
  'products.vacinapp.description': {
    en: 'VacinApp helps parents keep their children\'s vaccination schedule on track. Free app with alerts, digital history and offline access — already protecting more than 3,000 families in Brazil.',
    pt: 'O VacinApp ajuda pais a manter a caderneta de vacinação dos filhos em dia. Aplicativo gratuito com alertas, histórico digital e acesso offline — já protege mais de 3 mil famílias no Brasil.',
  },
  'products.vacinapp.benefit1': { en: 'Automatic alerts for every vaccine dose', pt: 'Alertas automáticos para cada dose' },
  'products.vacinapp.benefit2': { en: 'Complete SUS + private calendar', pt: 'Calendário completo do SUS + particular' },
  'products.vacinapp.benefit3': { en: 'Saved history and offline access', pt: 'Histórico salvo e acesso offline' },
  'products.vacinapp.cta': { en: 'Download VacinApp', pt: 'Baixar o VacinApp' },
  'products.footnote': { en: 'We build products that operate, not just software that runs.', pt: 'Construímos produtos que operam, não apenas software que executa.' },

  // Testimonials
  'testimonials.label': { en: 'Recommendations', pt: 'Depoimentos' },
  'testimonials.title': { en: 'What Clients and', pt: 'O que clientes e' },
  'testimonials.title_highlight': { en: 'Colleagues Say', pt: 'colegas dizem' },
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


  // Clients
  'clients.label': { en: 'Trusted By', pt: 'Quem Confia em Nós' },
  'clients.title': { en: 'Our', pt: 'Nossos' },
  'clients.title_highlight': { en: 'Clients', pt: 'Clientes' },
  'clients.description': {
    en: 'We work with leading American companies in healthcare, real estate and technology, and with the Brazilian public sector.',
    pt: 'Trabalhamos com empresas americanas líderes nos setores de saúde, mercado imobiliário e tecnologia, e com o setor público brasileiro.',
  },
  'clients.satisfaction': { en: 'Client Satisfaction', pt: 'Satisfação dos Clientes' },
  'clients.projects': { en: 'Delivered Projects', pt: 'Projetos Entregues' },
  'clients.eu_countries': { en: 'Countries Served', pt: 'Países Atendidos' },

  // Client cards
  'clients.sergipe.name': { en: 'Government of Sergipe', pt: 'Governo de Sergipe' },
  'clients.sergipe.country': { en: 'Brazil', pt: 'Brasil' },
  'clients.sergipe.sector': { en: 'Public Sector / Urban Land Regularization', pt: 'Setor Público / Regularização Fundiária Urbana' },
  'clients.sergipe.desc': { en: 'Management system and mobile app for field agents of the state program', pt: 'Sistema de gestão e aplicativo mobile para agentes de campo do programa estadual' },
  'clients.cenexel.name': { en: 'Cenexel', pt: 'Cenexel' },
  'clients.cenexel.country': { en: 'USA', pt: 'EUA' },
  'clients.cenexel.sector': { en: 'Healthcare and Clinical Research', pt: 'Saúde e Pesquisa Clínica' },
  'clients.cenexel.desc': { en: 'Supporting clinical research operations across the United States', pt: 'Apoio às operações de pesquisa clínica em todo o território dos EUA' },
  'clients.realpage.name': { en: 'Real Page', pt: 'Real Page' },
  'clients.realpage.country': { en: 'USA', pt: 'EUA' },
  'clients.realpage.sector': { en: 'Real Estate Technology', pt: 'Tecnologia para o Mercado Imobiliário' },
  'clients.realpage.desc': { en: 'Enterprise real estate management solutions serving millions of users', pt: 'Soluções corporativas de gestão imobiliária que atendem milhões de usuários' },
  'clients.pwn.name': { en: 'PWN Health', pt: 'PWN Health' },
  'clients.pwn.country': { en: 'USA', pt: 'EUA' },
  'clients.pwn.sector': { en: 'Health Technology', pt: 'Tecnologia para Saúde' },
  'clients.pwn.desc': { en: 'Development of a HIPAA-compliant healthcare platform', pt: 'Desenvolvimento de plataforma de saúde em conformidade com HIPAA' },
  'clients.crably.name': { en: 'Crably', pt: 'Crably' },
  'clients.crably.country': { en: 'Denmark', pt: 'Dinamarca' },
  'clients.crably.sector': { en: 'Technology Startup', pt: 'Startup de Tecnologia' },
  'clients.crably.desc': { en: 'Scandinavia, Germany and several European markets', pt: 'Escandinávia, Alemanha e diversos mercados europeus' },
  
  // Contact
  'contact.label': { en: 'Get In Touch', pt: 'Fale Conosco' },
  'contact.title': { en: 'Ready to Build Something', pt: 'Pronto para Construir Algo' },
  'contact.title_highlight': { en: 'Great?', pt: 'Incrível?' },
  'contact.description': {
    en: 'Whether you need a partner for your international project or for a public sector initiative, we would love to talk.',
    pt: 'Se você precisa de um parceiro para um projeto internacional ou para uma iniciativa do setor público, vamos conversar.',
  },
  'contact.info': { en: 'Contact Information', pt: 'Informações de Contato' },
  'contact.location': { en: 'Location', pt: 'Localização' },
  'contact.location_desc': { en: 'Available for US, European and Brazilian time zones', pt: 'Disponíveis para os fusos horários dos EUA, da Europa e do Brasil' },
  'contact.availability': { en: 'Availability', pt: 'Disponibilidade' },
  'contact.availability_desc': { en: 'Open to new projects', pt: 'Abertos a novos projetos' },
  'contact.connect': { en: 'Connect with us', pt: 'Conecte-se conosco' },
  'contact.cta_title': { en: "Let's Work Together", pt: 'Vamos Trabalhar Juntos' },
  'contact.cta_desc': {
    en: 'Looking for a partner with proven international experience and public sector expertise? We specialize in full-stack development for healthcare, real estate, enterprise and government.',
    pt: 'Procurando um parceiro com experiência internacional comprovada e atuação no setor público? Somos especialistas em desenvolvimento full-stack para saúde, mercado imobiliário, enterprise e governo.',
  },
  'contact.linkedin': { en: 'Connect on LinkedIn', pt: 'Conectar no LinkedIn' },
  'contact.whatsapp': { en: 'Chat on WhatsApp', pt: 'Falar no WhatsApp' },
  
  // Footer
  'footer.company': { en: 'Software Development Company', pt: 'Empresa de Desenvolvimento de Software' },
  'footer.rights': { en: 'All rights reserved.', pt: 'Todos os direitos reservados.' },
  'footer.markets': { en: 'USA, Europe & Brazil Since 2017', pt: 'EUA, Europa e Brasil desde 2017' },
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
