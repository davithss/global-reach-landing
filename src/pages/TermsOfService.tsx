const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <a href="/mission-control" className="text-sm text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Voltar para Mission Control
          </a>
          <h1 className="text-3xl font-bold text-white mb-2">Termos de Serviço</h1>
          <p className="text-gray-500 text-sm">Última atualização: março de 2026</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar o <strong>Mission Control</strong>, serviço operado pela{" "}
              <strong>Thiesse Softwares</strong>, você concorda com estes Termos de Serviço. Se não concordar
              com qualquer parte, não utilize o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Descrição do Serviço</h2>
            <p>
              O Mission Control é uma plataforma SaaS de automação de atendimento ao cliente via WhatsApp e
              Instagram, com recursos de agentes de inteligência artificial, gestão de conversas e integrações
              com a Meta Cloud API e Instagram Graph API.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Cadastro e Conta</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Você deve fornecer informações verdadeiras, precisas e completas no cadastro.</li>
              <li>É sua responsabilidade manter a confidencialidade das suas credenciais de acesso.</li>
              <li>Você é responsável por todas as atividades realizadas com sua conta.</li>
              <li>Notifique-nos imediatamente em caso de uso não autorizado da sua conta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Uso Permitido</h2>
            <p className="mb-3">Você concorda em utilizar o serviço apenas para fins legais. É proibido:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Utilizar o serviço para envio de spam ou mensagens não solicitadas em massa.</li>
              <li>Violar as políticas de uso das plataformas Meta (WhatsApp e Instagram).</li>
              <li>Coletar dados de usuários sem consentimento adequado.</li>
              <li>Tentar acessar sistemas ou dados além do seu escopo autorizado.</li>
              <li>Revender ou sublicenciar o serviço sem autorização expressa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Integrações com Terceiros</h2>
            <p>
              O Mission Control integra-se com serviços de terceiros, incluindo WhatsApp Business API (Meta)
              e Instagram Graph API. O uso dessas integrações está sujeito às políticas e termos das respectivas
              plataformas. Não nos responsabilizamos por mudanças, interrupções ou limitações impostas por
              esses serviços.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Pagamentos e Assinaturas</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Os planos e preços estão disponíveis na página de planos da plataforma.</li>
              <li>Os pagamentos são processados pela <strong>Greenn</strong>.</li>
              <li>Assinaturas são cobradas de forma recorrente conforme o plano escolhido.</li>
              <li>O cancelamento pode ser feito a qualquer momento, com efeito ao fim do período vigente.</li>
              <li>Não realizamos reembolsos de períodos já utilizados, salvo exigência legal.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Propriedade Intelectual</h2>
            <p className="mb-3">
              Todo o conteúdo, código, design e tecnologia da plataforma são de propriedade exclusiva da
              Thiesse Softwares. Você não adquire nenhum direito de propriedade intelectual ao utilizar o serviço.
            </p>
            <p>
              Os dados e conteúdos que você inserir na plataforma permanecem de sua propriedade. Você nos
              concede licença limitada para processá-los com o objetivo de prestar o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Privacidade e Dados</h2>
            <p>
              O tratamento dos seus dados pessoais é regido pela nossa{" "}
              <a href="/mission-control/politica-de-privacidade" className="text-purple-400 hover:underline">
                Política de Privacidade
              </a>
              , em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              Ao utilizar o serviço, você consente com a coleta e uso de dados conforme descrito na
              Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Limitação de Responsabilidade</h2>
            <p className="mb-3">
              O serviço é fornecido "no estado em que se encontra" ("as is"), sem garantias de qualquer
              natureza. Não nos responsabilizamos por danos indiretos, incidentais, especiais ou consequentes
              decorrentes do uso ou impossibilidade de uso do serviço.
            </p>
            <p>
              Nossa responsabilidade total não excederá o valor pago por você nos últimos 3 (três) meses
              de serviço.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Disponibilidade do Serviço</h2>
            <p>
              Nos comprometemos a manter o serviço disponível, porém não garantimos disponibilidade
              ininterrupta. Podemos realizar manutenções programadas ou emergenciais com ou sem aviso
              prévio quando necessário.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Rescisão</h2>
            <p>
              Podemos suspender ou encerrar seu acesso ao serviço, a qualquer momento e sem aviso prévio,
              caso você viole estes Termos. Você pode encerrar sua conta a qualquer momento através das
              configurações da plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">12. Alterações nos Termos</h2>
            <p>
              Podemos atualizar estes Termos periodicamente. Notificaremos sobre mudanças relevantes via
              e-mail ou aviso na plataforma. O uso contínuo do serviço após as alterações constitui
              aceitação dos novos Termos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">13. Lei Aplicável e Foro</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro
              da comarca de domicílio do usuário para dirimir quaisquer controvérsias, salvo disposição
              legal em contrário.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">14. Contato</h2>
            <p>Em caso de dúvidas sobre estes Termos, entre em contato:</p>
            <div className="mt-3 text-gray-300 space-y-1">
              <p><strong>Thiesse Softwares</strong></p>
              <p>
                E-mail:{" "}
                <a href="mailto:contato@thiesse.com.br" className="text-purple-400 hover:underline">
                  contato@thiesse.com.br
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
