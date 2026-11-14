import { useLanguage } from "@/contexts/LanguageContext";

const clientsData = [
  { key: "sergipe" },
  { key: "cenexel" },
  { key: "realpage" },
  { key: "pwn" },
  { key: "crably" },
];

const Clients = () => {
  const { t } = useLanguage();

  return (
    <section id="clients" className="py-24 bg-muted/30 border-y border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("clients.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("clients.title")}{" "}
            <span className="text-gradient-gold">{t("clients.title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground">{t("clients.description")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50">
          {clientsData.map((client) => (
            <div
              key={client.key}
              className="group bg-card p-8 hover:bg-secondary/40 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient-gold transition-all">
                {t(`clients.${client.key}.name`)}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-3">
                {t(`clients.${client.key}.relation`)}
              </p>
              <p className="text-sm text-muted-foreground">
                {t(`clients.${client.key}.desc`)}
              </p>
            </div>
          ))}
          <div className="bg-card p-8 flex items-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground leading-relaxed">
              {t("clients.strip")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
