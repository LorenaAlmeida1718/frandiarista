import Image from 'next/image';
import { Check } from 'lucide-react';

const qualities = [
  "Cuidado com cada ambiente",
  "Organização real",
  "Respeito ao espaço do cliente",
  "Constância na qualidade",
];

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <Image
              src="https://i.imgur.com/bLF6hKj.png"
              alt="Fran, diarista em Goiânia com mais de 10 anos de experiência"
              width={400}
              height={400}
              className="rounded-lg object-cover shadow-lg mx-auto w-full h-auto"
            />
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Quem é a Fran</h2>
            <p className="mt-4 text-muted-foreground font-body text-lg">
              A Fran atua como diarista em Goiânia há mais de 10 anos, cuidando da limpeza de casas e apartamentos com atenção, capricho e responsabilidade.
            </p>
            <p className="mt-4 text-muted-foreground font-body text-lg">
              Nesse tempo, aprendeu que uma boa faxina vai muito além do básico. Está nos detalhes que quase ninguém percebe — mas todo cliente sente.
            </p>
            <h3 className="mt-6 mb-4 text-xl font-semibold font-headline text-foreground">Seu trabalho é marcado por:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {qualities.map((quality) => (
                <li key={quality} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span className="font-body text-muted-foreground">{quality}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-foreground/80 font-body text-lg">
              "Meu maior diferencial é simples: fazer bem-feito, com calma e compromisso, em todas as visitas."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
