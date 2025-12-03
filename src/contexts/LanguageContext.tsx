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
  'hero.badge': { en: 'International Tech Consultant', pt: 'Consultor de Tech Internacional' },
  'hero.subtitle': { en: 'Senior Software Engineer & Entrepreneur', pt: 'Engenheiro de Software Sênior & Empreendedor' },
  'hero.description': { en: 'Building world-class software solutions for American and European markets since 2017. Co-founder experience in Denmark, serving clients across Scandinavia, Germany, and beyond.', pt: 'Construindo soluções de software de alto nível para mercados americanos e europeus desde 2017. Experiência como co-fundador na Dinamarca, atendendo clientes na Escandinávia, Alemanha e outros países.' },
  'hero.markets': { en: 'USA & Europe Markets', pt: 'Mercados Americano & Europeu' },
  'hero.years_intl': { en: 'Years International Experience', pt: 'Anos de Experiência Internacional' },
  'hero.years_total': { en: 'Years Total Experience', pt: 'Anos de Experiência Total' },
  'hero.cta': { en: 'Work With Me', pt: 'Trabalhe Comigo' },
  
  // About
  'about.label': { en: 'About Me', pt: 'Sobre Mim' },
  'about.title': { en: 'Bridging Continents Through', pt: 'Conectando Continentes Através da' },
  'about.title_highlight': { en: 'Technology', pt: 'Tecnologia' },
  'about.p1': { en: 'With over 18 years of experience in software development and 8 years working with international clients, I specialize in building robust software solutions that meet the demanding standards of both American and European markets.', pt: 'Com mais de 18 anos de experiência em desenvolvimento de software e 8 anos trabalhando com clientes internacionais, me especializo em construir soluções robustas que atendem aos padrões exigentes dos mercados americano e europeu.' },
  'about.p2': { en: 'My journey includes co-founding a startup in Denmark, where we successfully expanded operations across Scandinavia, Germany, and multiple European countries. This entrepreneurial experience gave me unique insights into building products that scale across different markets and cultures.', pt: 'Minha jornada inclui co-fundar uma startup na Dinamarca, onde expandimos com sucesso operações pela Escandinávia, Alemanha e vários países europeus. Essa experiência empreendedora me deu insights únicos sobre construir produtos que escalam em diferentes mercados e culturas.' },
  'about.p3': { en: 'Today, through Thiesse Softwares, I continue to partner with leading American companies, delivering high-quality solutions in healthcare, real estate, and enterprise sectors.', pt: 'Hoje, através da Thiesse Softwares, continuo a fazer parcerias com empresas americanas líderes, entregando soluções de alta qualidade em saúde, imobiliário e setores empresariais.' },
  'about.speaker': { en: 'Tech Speaker & Mentor', pt: 'Palestrante de Tech & Mentor' },
  'about.speaker_desc': { en: 'Sharing knowledge about working internationally', pt: 'Compartilhando conhecimento sobre trabalho internacional' },
  
  // Stats
  'stat.years_exp': { en: 'Years Experience', pt: 'Anos de Experiência' },
  'stat.intl_exp': { en: 'International Years', pt: 'Anos Internacionais' },
  'stat.countries': { en: 'Countries Worked', pt: 'Países Trabalhados' },
  'stat.us_clients': { en: 'Major US Clients', pt: 'Clientes EUA' },
  'stat.startup': { en: 'Startup Co-founded', pt: 'Startup Co-fundada' },
  
  // Highlights
  'highlight.global.title': { en: 'Global Reach', pt: 'Alcance Global' },
  'highlight.global.desc': { en: 'Working with American and European companies since 2017, delivering solutions across multiple time zones.', pt: 'Trabalhando com empresas americanas e europeias desde 2017, entregando soluções em múltiplos fusos horários.' },
  'highlight.startup.title': { en: 'Startup Founder', pt: 'Fundador de Startup' },
  'highlight.startup.desc': { en: 'Co-founded a tech startup in Denmark, expanding across Scandinavia and Germany.', pt: 'Co-fundei uma startup de tech na Dinamarca, expandindo pela Escandinávia e Alemanha.' },
  'highlight.tech.title': { en: 'Technical Excellence', pt: 'Excelência Técnica' },
  'highlight.tech.desc': { en: 'Full-stack expertise with focus on scalable architectures and modern technologies.', pt: 'Expertise full-stack com foco em arquiteturas escaláveis e tecnologias modernas.' },
  'highlight.enterprise.title': { en: 'Enterprise Clients', pt: 'Clientes Enterprise' },
  'highlight.enterprise.desc': { en: 'Trusted by major US companies including healthcare and real estate sectors.', pt: 'Confiado por grandes empresas americanas incluindo setores de saúde e imobiliário.' },
  
  // Experience
  'exp.label': { en: 'Career Journey', pt: 'Trajetória Profissional' },
  'exp.title': { en: 'International', pt: 'Experiência' },
  'exp.title_highlight': { en: 'Experience', pt: 'Internacional' },
  'exp.description': { en: 'A track record of delivering excellence for American and European companies, from startup founding to enterprise solutions.', pt: 'Um histórico de entregar excelência para empresas americanas e europeias, desde fundação de startup até soluções enterprise.' },
  'exp.current': { en: 'Current', pt: 'Atual' },
  'exp.previous': { en: 'Previous', pt: 'Anterior' },
  
  // Clients
  'clients.label': { en: 'Trusted By', pt: 'Clientes' },
  'clients.title': { en: 'Enterprise', pt: 'Clientes' },
  'clients.title_highlight': { en: 'Clients', pt: 'Enterprise' },
  'clients.description': { en: 'Working with leading American companies across healthcare, real estate, and technology sectors.', pt: 'Trabalhando com empresas americanas líderes nos setores de saúde, imobiliário e tecnologia.' },
  'clients.satisfaction': { en: 'Client Satisfaction', pt: 'Satisfação dos Clientes' },
  'clients.projects': { en: 'Major US Projects', pt: 'Projetos EUA' },
  'clients.eu_countries': { en: 'European Countries', pt: 'Países Europeus' },
  
  // Contact
  'contact.label': { en: 'Get In Touch', pt: 'Entre em Contato' },
  'contact.title': { en: 'Ready to Build Something', pt: 'Pronto para Construir Algo' },
  'contact.title_highlight': { en: 'Great?', pt: 'Incrível?' },
  'contact.description': { en: "Whether you need a senior developer for your American or European project, or want to discuss a potential collaboration, I'd love to hear from you.", pt: 'Se você precisa de um desenvolvedor sênior para seu projeto americano ou europeu, ou quer discutir uma colaboração potencial, adoraria ouvir de você.' },
  'contact.info': { en: 'Contact Information', pt: 'Informações de Contato' },
  'contact.location': { en: 'Location', pt: 'Localização' },
  'contact.location_desc': { en: 'Available for US & European timezones', pt: 'Disponível para fusos horários EUA e Europa' },
  'contact.availability': { en: 'Availability', pt: 'Disponibilidade' },
  'contact.availability_desc': { en: 'Open to new opportunities', pt: 'Aberto a novas oportunidades' },
  'contact.connect': { en: 'Connect with me', pt: 'Conecte-se comigo' },
  'contact.cta_title': { en: "Let's Work Together", pt: 'Vamos Trabalhar Juntos' },
  'contact.cta_desc': { en: 'Looking for a senior developer with proven international experience? I specialize in full-stack development for healthcare, real estate, and enterprise applications.', pt: 'Procurando um desenvolvedor sênior com experiência internacional comprovada? Me especializo em desenvolvimento full-stack para aplicações de saúde, imobiliário e enterprise.' },
  'contact.linkedin': { en: 'Connect on LinkedIn', pt: 'Conectar no LinkedIn' },
  'contact.email': { en: 'Send Email', pt: 'Enviar Email' },
  
  // Footer
  'footer.company': { en: 'International Tech Consulting', pt: 'Consultoria de Tech Internacional' },
  'footer.rights': { en: 'All rights reserved.', pt: 'Todos os direitos reservados.' },
  'footer.markets': { en: 'USA & Europe Markets Since 2017', pt: 'Mercados EUA & Europa desde 2017' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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
