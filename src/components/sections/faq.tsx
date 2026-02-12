import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Quais serviços estão inclusos na faxina?",
    answer: "A faxina inclui limpeza geral de pisos, superfícies, banheiros e cozinhas, remoção de pó e organização básica dos ambientes. O serviço é sempre adaptado à sua necessidade, combinado previamente pelo WhatsApp."
  },
  {
    question: "A Fran lava roupas, passa ou cozinha?",
    answer: "Não. O foco do serviço é exclusivamente na limpeza e organização dos ambientes. Serviços como lavar e passar roupas ou cozinhar não estão inclusos."
  },
  {
    question: "Preciso ter os produtos e materiais de limpeza?",
    answer: "Sim, é responsabilidade do cliente fornecer os produtos de limpeza (como desinfetante, limpa-vidros, etc.) e materiais (panos, baldes, vassouras). Caso precise de alguma orientação sobre quais produtos comprar, a Fran pode ajudar."
  },
  {
    question: "Como funciona o agendamento e pagamento?",
    answer: "O agendamento é feito diretamente pelo WhatsApp, onde você pode consultar a disponibilidade de datas. O pagamento geralmente é realizado no dia do serviço, via Pix ou transferência."
  },
  {
    question: "A Fran atende em quais regiões de Goiânia?",
    answer: "O atendimento é realizado em todos os bairros de Goiânia e em algumas cidades da região metropolitana. Para confirmar se seu endereço é atendido, basta entrar em contato."
  },
]

export default function Faq() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Tire suas principais dúvidas sobre o serviço de diarista em Goiânia.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem value={item.question} key={item.question}>
              <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
