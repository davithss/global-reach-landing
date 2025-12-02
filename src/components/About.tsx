import { Code, Globe2, Rocket, Users } from "lucide-react";
import speakingImage from "@/assets/diego-speaking.jpeg";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "3+", label: "Countries Worked" },
  { value: "5+", label: "Major US Clients" },
  { value: "1", label: "Startup Co-founded" },
];

const highlights = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Working with American and European companies since 2017, delivering solutions across multiple time zones.",
  },
  {
    icon: Rocket,
    title: "Startup Founder",
    description: "Co-founded a tech startup in Denmark, expanding across Scandinavia and Germany.",
  },
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Full-stack expertise with focus on scalable architectures and modern technologies.",
  },
  {
    icon: Users,
    title: "Enterprise Clients",
    description: "Trusted by major US companies including healthcare and real estate sectors.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-muted/50 to-transparent -z-10" />
      
      <div className="container mx-auto px-6">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-card-gradient rounded-xl shadow-card border border-border/50 hover:shadow-card-hover transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bridging Continents Through <span className="text-gradient-gold">Technology</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 8 years of experience working with international clients, I specialize in 
                building robust software solutions that meet the demanding standards of both American 
                and European markets.
              </p>
              <p>
                My journey includes co-founding a startup in Denmark, where we successfully expanded 
                operations across Scandinavia, Germany, and multiple European countries. This 
                entrepreneurial experience gave me unique insights into building products that scale 
                across different markets and cultures.
              </p>
              <p>
                Today, through <span className="text-foreground font-semibold">Thiesse Softwares</span>, 
                I continue to partner with leading American companies, delivering high-quality solutions 
                in healthcare, real estate, and enterprise sectors.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img 
                src={speakingImage} 
                alt="Diego Thiesse speaking at a tech event" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-medium">Tech Speaker & Mentor</p>
                <p className="text-primary-foreground/70 text-sm">Sharing knowledge about working internationally</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-navy-medium/20 rounded-xl -z-10" />
          </div>
        </div>
        
        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="group p-6 bg-card rounded-xl border border-border/50 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
