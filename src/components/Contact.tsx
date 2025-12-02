import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Something <span className="text-gradient-gold">Great?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need a senior developer for your American or European project, 
              or want to discuss a potential collaboration, I&apos;d love to hear from you.
            </p>
          </div>
          
          <div className="bg-card-gradient rounded-3xl shadow-card-hover border border-border/50 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground text-sm">Available for US & European timezones</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Availability</p>
                      <p className="text-muted-foreground text-sm">Open to new opportunities</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com/in/thiesse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-gold" />
                    </a>
                    <a 
                      href="mailto:contact@thiesse.dev" 
                      className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-gold" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-navy-deep/5 rounded-2xl p-8 border border-navy-deep/10">
                  <h4 className="font-semibold text-foreground text-lg mb-3">Let&apos;s Work Together</h4>
                  <p className="text-muted-foreground text-sm mb-6">
                    Looking for a senior developer with proven international experience? 
                    I specialize in full-stack development for healthcare, real estate, and enterprise applications.
                  </p>
                  <div className="space-y-3">
                    <Button variant="gold" size="lg" className="w-full" asChild>
                      <a href="https://linkedin.com/in/thiesse" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href="mailto:contact@thiesse.dev">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
