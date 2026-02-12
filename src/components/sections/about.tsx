import { Clock, Award, Users } from 'lucide-react';

const pillars = [
    {
        title: "Pontualidade",
        icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
        title: "Capricho",
        icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
        title: "Responsabilidade",
        icon: <Users className="h-10 w-10 text-primary" />,
    },
];

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">QUEM É A FRAN</h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            A Fran atua como diarista em Goiânia, atendendo casas, apartamentos e pequenos espaços comerciais.
          </p>
          <p className="mt-4 text-muted-foreground font-body text-xl">
            Seu diferencial é simples, mas raro:
            <span className="block font-semibold text-foreground mt-2">tratar cada casa como se fosse a própria.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {pillars.map((item) => (
            <div key={item.title} className="flex flex-col items-center p-6 rounded-lg">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondary mb-6 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold font-headline text-foreground">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
