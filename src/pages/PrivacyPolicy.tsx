const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <a href="/mission-control" className="text-sm text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Voltar para Mission Control
          </a>
          <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidade</h1>
          <p className="text-gray-500 text-sm">Última atualização: março de 2026</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Quem somos</h2>
            <p>
              O <strong>Mission Control</strong> é um serviço de automação de atendimento via WhatsApp e Instagram,
              desenvolvido e operado por <strong>Global Reach</strong>. Esta Política de Privacidade descreve como
              coletamos, usamos e protegemos os dados de nossos clientes e usuários finais.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Dados que coletamos</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong>Dados de cadastro:</strong> nome, e-mail e informações de contato fornecidas ao criar uma conta.</li>
              <li><strong>Dados de mensagens:</strong> conteúdo das conversas processadas pelo agente de IA para fins de atendimento automatizado.</li>
              <li><strong>Dados de uso:</strong> logs de acesso, horários de uso e métricas de desempenho do agente.</li>
              <li><strong>Dados de integração:</strong> tokens de acesso à API do WhatsApp (Meta) e do Instagram necessários para o funcionamento do serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Como usamos os dados</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Fornecer e operar o serviço de atendimento automatizado.</li>
              <li>Treinar e melhorar o agente de IA conforme o perfil da marca do cliente.</li>
              <li>Enviar comunicações relacionadas ao serviço (alertas, relatórios, atualizações).</li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Compartilhamento de dados</h2>
            <p className="mb-3">
              Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins comerciais.
              Os dados podem ser compartilhados apenas com:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong>Meta Platforms:</strong> para operar as integrações com WhatsApp e Instagram, conforme os Termos de Uso da plataforma.</li>
              <li><strong>Provedores de infraestrutura:</strong> como serviços de hospedagem e banco de dados (ex: Supabase, Vercel), sob acordos de confidencialidade.</li>
              <li><strong>Autoridades competentes:</strong> quando exigido por lei ou ordem judicial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Integração com a Meta (WhatsApp e Instagram)</h2>
            <p>
              O Mission Control utiliza as APIs oficiais da Meta para envio e recebimento de mensagens.
              Ao usar nosso serviço, você concorda com os{" "}
              <a
                href="https://www.whatsapp.com/legal/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                Termos de Serviço do WhatsApp
              </a>{" "}
              e a{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                Política de Privacidade da Meta
              </a>
              . Os dados de conversas são processados por nossa plataforma unicamente para fins de atendimento
              automatizado, conforme autorizado pelo titular da conta.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Retenção de dados</h2>
            <p>
              Mantemos os dados pelo tempo necessário para a prestação do serviço. Após o cancelamento da conta,
              os dados são excluídos em até <strong>30 dias</strong>, salvo obrigação legal de retenção por prazo maior.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo criptografia em
              trânsito (HTTPS/TLS), autenticação por token JWT e controle de acesso baseado em perfis (RLS).
              Nenhum sistema é 100% seguro, mas empregamos as melhores práticas disponíveis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Seus direitos (LGPD)</h2>
            <p className="mb-3">Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Confirmar a existência de tratamento de seus dados.</li>
              <li>Acessar, corrigir ou solicitar a exclusão dos seus dados.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
              <li>Portabilidade dos dados.</li>
            </ul>
            <p className="mt-3">
              Para exercer seus direitos, entre em contato pelo e-mail:{" "}
              <a href="mailto:contato@globalreach.com.br" className="text-purple-400 hover:underline">
                contato@globalreach.com.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Cookies</h2>
            <p>
              Nosso site pode utilizar cookies técnicos essenciais para o funcionamento das páginas.
              Não utilizamos cookies para rastreamento publicitário de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Alterações desta política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Alterações relevantes serão
              comunicadas por e-mail ou aviso no painel. O uso continuado do serviço após a notificação
              implica aceitação das mudanças.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta política ou sobre o tratamento de dados, entre em contato:
            </p>
            <div className="mt-3 text-gray-300 space-y-1">
              <p><strong>Global Reach</strong></p>
              <p>E-mail: <a href="mailto:contato@globalreach.com.br" className="text-purple-400 hover:underline">contato@globalreach.com.br</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
