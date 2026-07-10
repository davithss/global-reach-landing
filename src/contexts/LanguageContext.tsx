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
  'hero.subtitle': { en: 'International Projects & Government Solutions', pt: 'Projetos Internacionais & Soluções para o Setor Público' },
  'hero.description': { en: 'We design and build enterprise-grade software for international clients and government institutions. Since 2017, delivering solutions in healthcare, real estate, and public sector technology across the USA, Europe, and Brazil.', pt: 'Projetamos e construímos software de nível empresarial para clientes internacionais e instituições públicas. Desde 2017, entregando soluções em saúde, imobiliário e tecnologia para o setor público nos EUA, na Europa e no Brasil.' },
  'hero.markets': { en: 'Global & Government Projects', pt: 'Projetos Globais & Governamentais' },
  'hero.years_intl': { en: 'Years International Experience', pt: 'Anos de Experiência Internacional' },
  'hero.years_total': { en: 'Years in the Market', pt: 'Anos de Mercado' },
  'hero.cta': { en: 'Talk to Us', pt: 'Fale Conosco' },

  // About
  'about.label': { en: 'About Us', pt: 'Sobre Nós' },
  'about.title': { en: 'Building Technology That', pt: 'Construindo Tecnologia Que' },
  'about.title_highlight': { en: 'Delivers', pt: 'Entrega Resultado' },
  'about.p1': { en: 'Thiesse Software is a software development company with over 18 years of combined experience and 8 years working with international clients. We specialize in building robust, scalable solutions that meet the demanding standards of enterprise and government clients alike.', pt: 'A Thiesse Software é uma empresa de desenvolvimento de software com mais de 18 anos de experiência acumulada e 8 anos atuando com clientes internacionais. Somos especializados em construir soluções robustas e escaláveis que atendem aos padrões exigentes de clientes corporativos e do setor público.' },
  'about.p2': { en: 'Our team\'s background includes co-founding a startup in Denmark, expanding operations across Scandinavia, Germany, and multiple European countries. That entrepreneurial experience shapes how we build products today: designed to scale across different markets, sectors, and regulatory environments.', pt: 'A trajetória da nossa equipe inclui a co-fundação de uma startup na Dinamarca, com expansão pela Escandinávia, Alemanha e outros países europeus. Essa experiência empreendedora molda como construímos produtos hoje: pensados para escalar em diferentes mercados, setores e ambientes regulatórios.' },
  'about.p3': { en: 'Today, through Thiesse Softwares, we partner with leading American and European companies in healthcare, real estate, and enterprise technology — and now with the Government of Sergipe, developing the software and mobile application for the state\'s Urban Land Regularization program.', pt: 'Hoje, através da Thiesse Softwares, fazemos parcerias com empresas americanas e europeias líderes em saúde, imobiliário e tecnologia empresarial — e agora também com o Governo do Estado de Sergipe, desenvolvendo o sistema e o aplicativo mobile do programa de Regularização Fundiária Urbana do estado.' },
  'about.speaker': { en: 'Tech Speaker & Mentor', pt: 'Palestrante de Tech & Mentor' },
  'about.speaker_desc': { en: 'Sharing knowledge about working internationally', pt: 'Compartilhando conhecimento sobre trabalho internacional' },

  // Stats
  'stat.years_exp': { en: 'Years in the Market', pt: 'Anos de Mercado' },
  'stat.intl_exp': { en: 'International Years', pt: 'Anos Internacionais' },
  'stat.countries': { en: 'Countries Worked', pt: 'Países Trabalhados' },
  'stat.us_clients': { en: 'Major US Clients', pt: 'Clientes EUA' },
  'stat.startup': { en: 'Government Program', pt: 'Programa Governamental' },

  // Highlights
  'highlight.global.title': { en: 'Global Reach', pt: 'Alcance Global' },
  'highlight.global.desc': { en: 'Working with American and European companies since 2017, delivering solutions across multiple time zones.', pt: 'Trabalhando com empresas americanas e europeias desde 2017, entregando soluções em múltiplos fusos horários.' },
  'highlight.startup.title': { en: 'Public Sector', pt: 'Setor Público' },
  'highlight.startup.desc': { en: 'Developing software and a mobile app for the Government of Sergipe\'s urban land regularization program.', pt: 'Desenvolvendo sistema e aplicativo mobile para o programa de regularização fundiária urbana do Governo de Sergipe.' },
  'highlight.tech.title': { en: 'Technical Excellence', pt: 'Excelência Técnica' },
  'highlight.tech.desc': { en: 'Full-stack expertise with focus on scalable architectures and modern technologies.', pt: 'Expertise full-stack com foco em arquiteturas escaláveis e tecnologias modernas.' },
  'highlight.enterprise.title': { en: 'Enterprise & Government Clients', pt: 'Clientes Enterprise & Governo' },
  'highlight.enterprise.desc': { en: 'Trusted by major US companies and Brazilian government institutions across healthcare, real estate, and public sector technology.', pt: 'Confiado por grandes empresas americanas e por instituições governamentais brasileiras, nos setores de saúde, imobiliário e tecnologia para o setor público.' },

  // Experience
  'exp.label': { en: 'Track Record', pt: 'Trajetória' },
  'exp.title': { en: 'Projects &', pt: 'Projetos &' },
  'exp.title_highlight': { en: 'Experience', pt: 'Experiência' },
  'exp.description': { en: 'A track record of delivering excellence for American, European, and Brazilian government clients — from startup founding to enterprise and public sector solutions.', pt: 'Um histórico de entregar excelência para clientes americanos, europeus e para o setor público brasileiro — desde a fundação de uma startup até soluções enterprise e governamentais.' },
  'exp.current': { en: 'Current', pt: 'Atual' },
  'exp.previous': { en: 'Previous', pt: 'Anterior' },

  // Clients
  'clients.label': { en: 'Trusted By', pt: 'Clientes' },
  'clients.title': { en: 'Enterprise &', pt: 'Clientes Enterprise' },
  'clients.title_highlight': { en: 'Government Clients', pt: '& Governo' },
  'clients.description': { en: 'Working with leading American companies and Brazilian government institutions across healthcare, real estate, and public sector technology.', pt: 'Trabalhando com empresas americanas líderes e instituições governamentais brasileiras nos setores de saúde, imobiliário e tecnologia para o setor público.' },
  'clients.satisfaction': { en: 'Client Satisfaction', pt: 'Satisfação dos Clientes' },
  'clients.projects': { en: 'Major Projects Delivered', pt: 'Projetos Entregues' },
  'clients.eu_countries': { en: 'European Countries', pt: 'Países Europeus' },

  // Contact
  'contact.label': { en: 'Get In Touch', pt: 'Entre em Contato' },
  'contact.title': { en: 'Ready to Build Something', pt: 'Pronto para Construir Algo' },
  'contact.title_highlight': { en: 'Great?', pt: 'Incrível?' },
  'contact.description': { en: "Whether you need a technology partner for an international project or a government initiative, we'd love to hear from you.", pt: 'Se você precisa de um parceiro de tecnologia para um projeto internacional ou uma iniciativa governamental, adoraríamos ouvir de você.' },
  'contact.info': { en: 'Contact Information', pt: 'Informações de Contato' },
  'contact.location': { en: 'Location', pt: 'Localização' },
  'contact.location_desc': { en: 'Available for US, European, and Brazilian timezones', pt: 'Disponível para fusos horários dos EUA, Europa e Brasil' },
  'contact.availability': { en: 'Availability', pt: 'Disponibilidade' },
  'contact.availability_desc': { en: 'Open to new opportunities', pt: 'Aberto a novas oportunidades' },
  'contact.connect': { en: 'Connect with us', pt: 'Conecte-se conosco' },
  'contact.cta_title': { en: "Let's Work Together", pt: 'Vamos Trabalhar Juntos' },
  'contact.cta_desc': { en: 'Looking for a technology partner with proven international and government experience? We specialize in full-stack development for healthcare, real estate, enterprise, and public sector applications.', pt: 'Procurando um parceiro de tecnologia com experiência comprovada em projetos internacionais e governamentais? Somos especializados em desenvolvimento full-stack para aplicações de saúde, imobiliário, enterprise e setor público.' },
  'contact.linkedin': { en: 'Connect on LinkedIn', pt: 'Conectar no LinkedIn' },
  'contact.email': { en: 'Send Email', pt: 'Enviar Email' },

  // Footer
  'footer.company': { en: 'International & Government Software Solutions', pt: 'Soluções de Software Internacionais & Governamentais' },
  'footer.rights': { en: 'All rights reserved.', pt: 'Todos os direitos reservados.' },
  'footer.markets': { en: 'USA, Europe & Brazil Since 2017', pt: 'EUA, Europa & Brasil desde 2017' },
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
