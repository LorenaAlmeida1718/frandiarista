'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import WhatsAppButton from '@/components/whatsapp-button';
import { CheckCircle, MessageSquare } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Ol%C3%A1%2C%20Dona%20Fran!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20uma%20faxina%20em%20Goi%C3%A2nia.%20Como%20funciona%3F";

const serviceIncludes = [
  'Limpeza pontual para quando você mais precisa',
  'Flexibilidade para agendar conforme sua rotina',
  'Ideal para limpezas gerais ou de manutenção',
  'Higienização de cozinhas e banheiros',
  'Organização dos ambientes',
  'O mesmo padrão de qualidade de uma faxina completa',
];

export default function DiaristaPorDiariaPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'daily-cleaning');

  return (
    <>
      <main>
        <section id="hero-service" className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-center text-background">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Serviço de diarista por diária em Goiânia"
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-foreground/80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tight uppercase font-headline sm:text-5xl md:text-6xl">
              Diarista por Diária em Goiânia
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 font-body max-w-3xl mx-auto">
              A flexibilidade que você precisa com a confiança que seu lar merece. Contrate uma limpeza pontual com valor justo e qualidade garantida.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="font-bold h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transform transition-transform duration-300 hover:scale-105">
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-6 w-6" />
                  Consultar Valor e Disponibilidade
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="service-details" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Sua Casa Limpa, no Seu Tempo</h2>
                <p className="mt-4 text-muted-foreground font-body text-lg">
                  Precisa de uma ajuda extra com a limpeza, mas não quer um compromisso fixo? O serviço de diarista por diária é a solução perfeita. Você agenda uma limpeza profissional com uma <Link href="/" className="text-primary font-semibold hover:underline">diarista em Goiânia</Link> de confiança para o dia que for melhor para você.
                </p>
                <p className="mt-4 text-muted-foreground font-body text-lg">
                  Seja para uma ocasião especial, para dar aquela geral no apartamento ou simplesmente para ter um dia de folga, você conta com um serviço de qualidade, sem burocracia.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline text-foreground mb-4">Vantagens da Diária Avulsa</h3>
                <ul className="space-y-3">
                  {serviceIncludes.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <span className="font-body text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold font-headline text-foreground">Consulte o valor da diária para sua necessidade.</h3>
              <p className="mt-2 text-muted-foreground font-body text-lg">Clique no botão e fale diretamente comigo para saber mais e agendar sua limpeza.</p>
              <Button asChild size="lg" className="mt-6 font-bold h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transform transition-transform duration-300 hover:scale-105">
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-6 w-6" />
                  Saber o Valor da Diária
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  );
}
