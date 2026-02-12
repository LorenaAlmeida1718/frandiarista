import { Clock, Sparkles, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    title: "Pontualidade e Compromisso",
    description: "Respeito seu tempo. A limpeza começa e termina no horário combinado, com a agilidade e eficiência que você espera de uma diarista profissional.",
    icon: <Clock className="h-10 w-10 text-primary" />,
  },
  {
    title: "Cuidado nos Detalhes",
    description: "Uma limpeza minuciosa que vai além do superficial. Cada canto do seu ambiente recebe a atenção necessária para um resultado impecável.",
    icon: <Sparkles className="h-10 w-10 text-primary" />,
  },
  {
    title: "Confiança e Segurança",
    description: "Sua tranquilidade é minha prioridade. Sou uma profissional com referências, dedicada a cuidar do seu espaço com o máximo de respeito e segurança.",
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">POR QUE ESCOLHER MEU SERVIÇO DE DIARISTA?</h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">Mais do que limpeza, ofereço tranquilidade e um trabalho bem-feito.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {differentiators.map((item) => (
            <div key={item.title} className="flex flex-col items-center p-6 rounded-lg">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-background mb-6 shadow-md">
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
