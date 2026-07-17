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
  'nav.clients': { en: 'Clients', pt: 'Clientes' },
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
  'contact.email': { en: 'Send E-mail', pt: 'Enviar E-mail' },
  
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
