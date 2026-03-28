'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import WhatsAppButton from '@/components/whatsapp-button';
import { CheckCircle, MessageSquare, XCircle, ShieldCheck, Star } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Ol%C3%A1%2C%20Dona%20Fran!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20uma%20faxina%20em%20Goi%C3%A2nia.%20Como%20funciona%3F";

const painPoints = [
  'Poeira acumulada nos móveis',
  'Banheiro pedindo socorro',
  'Cozinha desorganizada',
  'A sensação de que a casa nunca está em ordem',
];

const includedServices = [
  'Limpeza de pisos e superfícies',
  'Limpeza completa de banheiros e cozinha',
  'Limpeza de quartos e salas',
  'Remoção de pó e poeira',
  'Organização básica dos ambientes',
  'Serviços ajustados conforme a sua necessidade',
];

const idealFor = [
  'Para quem trabalha fora e tem a rotina corrida',
  'Para quem quer mais tempo livre para a família e lazer',
  'Para quem valoriza um ambiente limpo e organizado',
  'Para quem busca uma diarista em Goiânia que seja confiável',
]

const securityPoints = [
  { text: 'Comunicação Clara', icon: <MessageSquare className="h-6 w-6 text-primary" /> },
  { text: 'Discrição e Respeito', icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
  { text: 'Cuidado com seus Pertences', icon: <Star className="h-6 w-6 text-primary" /> },
];

export default function FaxinaResidencialPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'residential-cleaning');

  return (
    <>
      <main>
        <section id="hero-service" className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-center text-background">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Serviço de faxina residencial em Goiânia"
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-foreground/80" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tight uppercase font-headline sm:text-4xl md:text-5xl">
              Faxina em Goiânia com diarista de confiança: sua casa limpa, organizada e agradável — sem estresse
            </h1>
            <div className="mt-10">
              <Button asChild size="lg" className="font-bold h-auto sm:h-14 py-3 px-4 sm:px-8 text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  👉 Quero agendar minha faxina agora
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="service-details" className="w-full py-16 md:py-24 bg-background text-foreground">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16">

            <div className="text-center">
              <h2 className="text-3xl font-bold font-headline sm:text-4xl uppercase">Diarista em Goiânia especializada em faxina residencial para casas e apartamentos</h2>
              <p className="mt-4 text-muted-foreground font-body text-lg max-w-3xl mx-auto">
                Se você procura uma <Link href="/" className="text-primary font-semibold hover:underline">diarista em Goiânia</Link> para cuidar da limpeza da sua casa com atenção, capricho e responsabilidade, a Fran oferece um serviço humanizado, pontual e feito nos mínimos detalhes.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-headline text-foreground text-center">Sua rotina é corrida? Você chega em casa e encontra...</h3>
              <p className="mt-2 text-muted-foreground font-body text-center">Você sai cedo, trabalha o dia inteiro, resolve mil coisas ao mesmo tempo e, quando chega em casa, tudo o que queria era descansar.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {painPoints.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-card p-3 rounded-md">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="font-body text-card-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground font-body text-center">Você até tenta manter tudo sob controle, mas o tempo é curto e o cansaço pesa. E quando resolve chamar alguém, surge a insegurança: Será que posso confiar?</p>
            </div>

            <div className="text-center">
               <p className="text-primary font-headline text-xl uppercase tracking-wider">A proposta da Fran é simples:</p>
              <h3 className="mt-2 text-3xl font-bold font-headline text-foreground">Fazer com que você sinta alívio, conforto e tranquilidade ao chegar em casa.</h3>
              <p className="mt-4 text-muted-foreground font-body text-lg max-w-2xl mx-auto">Nada de limpeza feita às pressas. A faxina é feita com calma, cuidado e atenção aos detalhes — como se fosse na própria casa.</p>
            </div>
            
            <div className="text-center bg-primary text-primary-foreground p-8 rounded-lg shadow-lg">
                <p className="font-headline text-xl uppercase tracking-wider">Minha Promessa</p>
                <p className="mt-2 text-2xl font-bold">Cuidar da limpeza da sua casa para deixá-la organizada, limpa e agradável em poucas horas, sem correria e sem dor de cabeça.</p>
            </div>


            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold font-headline text-foreground mb-4">O que está incluso na faxina residencial?</h3>
                <ul className="space-y-3">
                  {includedServices.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <span className="font-body text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline text-foreground mb-4">Para quem esse serviço é ideal?</h3>
                <ul className="space-y-3">
                  {idealFor.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <span className="font-body text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold font-headline text-foreground">Seu lar em boas mãos</h3>
              <p className="mt-2 text-muted-foreground font-body max-w-2xl mx-auto">Sabemos que chamar uma diarista envolve confiança. Por isso, a Fran preza pela comunicação clara, discrição e compromisso com seu espaço e seus pertences.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-6">
                {securityPoints.map((point) => (
                  <div key={point.text} className="flex flex-col items-center gap-2">
                    {point.icon}
                    <span className="font-body text-foreground font-medium">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center border-t border-border pt-12">
              <h3 className="text-2xl font-bold font-headline text-foreground">Agende sua faxina residencial em Goiânia</h3>
              <p className="mt-2 text-muted-foreground font-body text-lg">Fale direto com a Fran pelo WhatsApp para consultar disponibilidade, tirar dúvidas e solicitar seu orçamento.</p>
              <Button asChild size="lg" className="mt-6 font-bold h-auto sm:h-14 py-3 px-4 sm:px-8 text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  👉 Quero agendar minha faxina agora
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
