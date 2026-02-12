import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Fran Diarista',
  description: 'Conheça nossa política de privacidade e como seus dados são utilizados no site Fran Diarista em Goiânia.',
  robots: 'noindex, follow',
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto bg-card text-card-foreground p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold font-headline text-foreground mb-8 text-center uppercase">Política de Privacidade</h1>
          <div className="space-y-6 font-body text-muted-foreground">
            <section>
                <p>A sua privacidade é importante para nós. É política do site Fran Diarista respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">1. Coleta de Dados</h2>
              <p>Solicitamos informações pessoais como nome, telefone e a descrição do serviço desejado apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
                <p className="mt-2">Os dados informados no formulário de contato são utilizados exclusivamente para gerar uma mensagem pré-formatada que será enviada para o nosso WhatsApp, agilizando o seu atendimento para orçamento e agendamento.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">2. Uso e Armazenamento dos Dados</h2>
              <p>Não armazenamos as informações coletadas em nosso site. Os dados do formulário são apenas utilizados para criar o link de redirecionamento para o WhatsApp. A conversa e os dados subsequentes são gerenciados diretamente na plataforma do WhatsApp, sujeitos às suas próprias políticas de privacidade.</p>
              <p className="mt-2">Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">3. Links para Sites de Terceiros</h2>
              <p>O nosso site pode ter links para sites externos que não são operados por nós, como o WhatsApp. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">4. Seus Direitos</h2>
              <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
            </section>
             <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">5. Alterações na Política de Privacidade</h2>
              <p>Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">6. Contato</h2>
              <p>Para quaisquer dúvidas sobre nossa política de privacidade, entre em contato pelo e-mail: contato@frandiarista.online.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
