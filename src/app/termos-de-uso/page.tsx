import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | Fran Diarista',
  description: 'Leia os termos de uso do site Fran Diarista em Goiânia.',
  robots: 'noindex, follow',
};

export default function TermosDeUsoPage() {
  return (
    <main className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto bg-card text-card-foreground p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold font-headline text-foreground mb-8 text-center uppercase">Termos de Uso</h1>
          <div className="space-y-6 font-body text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">1. Aceitação dos Termos</h2>
              <p>Ao acessar e utilizar o site frandiarista.online, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve utilizar nosso site.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">2. Uso do Site</h2>
              <p>Este site destina-se a fornecer informações sobre os serviços de limpeza da Fran Diarista e a facilitar o contato para orçamento e agendamento. O uso indevido do site, incluindo tentativas de fraude ou envio de informações falsas, é estritamente proibido.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">3. Orçamentos e Agendamentos</h2>
              <p>As informações enviadas através do formulário de contato ou WhatsApp serão utilizadas exclusivamente para fins de orçamento e agendamento dos serviços. O envio de uma solicitação não garante o agendamento, que está sujeito à disponibilidade e confirmação direta pela Fran Diarista.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">4. Propriedade Intelectual</h2>
              <p>Todo o conteúdo presente neste site, incluindo textos, imagens e design, é de propriedade da Fran Diarista ou de seus licenciadores e protegido por leis de direitos autorais. A reprodução não autorizada de qualquer conteúdo é proibida.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">5. Limitação de Responsabilidade</h2>
              <p>O site é fornecido "como está". Não garantimos que o site estará livre de erros ou interrupções. A Fran Diarista não se responsabiliza por quaisquer danos diretos ou indiretos resultantes do uso ou da incapacidade de usar este site.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">6. Alterações nos Termos</h2>
              <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade revisar os termos periodicamente.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold font-headline text-foreground mb-2">7. Contato</h2>
              <p>Para quaisquer dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: contato@frandiarista.online.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
