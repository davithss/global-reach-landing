import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

const HomeSEO = () => {
  const { language } = useLanguage();
  return <PageSEO path="/" language={language} />;
};

const Index = () => {
  return (
    <LanguageProvider>
      <HomeSEO />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Clients />
          <Solutions />
          <Products />
          <Experience />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
