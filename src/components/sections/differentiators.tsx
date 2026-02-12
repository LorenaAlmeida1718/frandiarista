import { Clock, Sparkles, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    title: "Pontualidade",
    description: "Respeitamos seu tempo. Chegamos na hora marcada e cumprimos o cronograma com eficiência.",
    icon: <Clock className="h-10 w-10 text-primary" />,
  },
  {
    title: "Seus Produtos de Confiança",
    description: "Para sua comodidade, a limpeza é realizada com os produtos que você já possui e confia.",
    icon: <Sparkles className="h-10 w-10 text-primary" />,
  },
  {
    title: "Confiança e Segurança",
    description: "Profissionais de confiança com treinamento para garantir sua tranquilidade.",
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">POR QUE NOS ESCOLHER?</h2>
          <p className="mt-4 text-muted-foreground font-body">Nosso compromisso é com a sua satisfação total.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {differentiators.map((item) => (
            <div key={item.title} className="flex flex-col items-center p-6 rounded-lg transition-shadow hover:shadow-lg">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondary mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold font-headline text-foreground">{item.title}</h3>
              <p className="mt-2 text-muted-foreground font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}