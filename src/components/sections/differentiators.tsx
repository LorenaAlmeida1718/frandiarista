import { Clock, Sparkles, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    title: "Pontualidade",
    description: "Respeitamos seu tempo. Chegamos na hora marcada e cumprimos o cronograma com eficiência.",
    icon: <Clock className="h-10 w-10 text-primary-foreground" />,
  },
  {
    title: "Produtos de Qualidade",
    description: "Utilizamos produtos de limpeza profissionais que garantem um resultado superior sem danificar suas superfícies.",
    icon: <Sparkles className="h-10 w-10 text-primary-foreground" />,
  },
  {
    title: "Confiança",
    description: "Nossa equipe é de total confiança, com referências e treinamento para garantir sua tranquilidade e segurança.",
    icon: <ShieldCheck className="h-10 w-10 text-primary-foreground" />,
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl uppercase">Por que nos escolher?</h2>
          <p className="mt-4 text-muted-foreground font-body">Nosso compromisso é com a sua satisfação total.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {differentiators.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold font-headline text-white">{item.title}</h3>
              <p className="mt-2 text-muted-foreground font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
