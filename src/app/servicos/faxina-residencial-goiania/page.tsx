'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import WhatsAppButton from '@/components/whatsapp-button';
import { CheckCircle, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20faxina%20residencial.";

// This metadata is illustrative for a server component.
// In a real client component, you'd manage the title dynamically if needed.
export const metadata: Metadata = {
  title: 'Faxina Residencial em Goiânia | Limpeza Detalhada para seu Lar',
  description: 'Serviço profissional de faxina residencial em Goiânia. Deixe sua casa ou apartamento impecável com uma diarista de confiança. Cuidado, organização e sua rotina facilitada.',
  keywords: ['faxina residencial goiânia', 'diarista para casa', 'limpeza de casa goiânia', 'faxineira residencial', 'diarista em goiânia'],
};

const serviceIncludes = [
  'Limpeza detalhada de pisos e superfícies',
  'Higienização completa de banheiros e cozinha',
  'Remoção de pó, sujeira e teias de aranha',
  'Limpeza de vidros, janelas e espelhos (parte interna)',
  'Organização geral para um ambiente mais leve',
  'Cuidado especial com seus móveis e objetos',
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
            <h1 className="text-4xl font-bold tracking-tight uppercase font-headline sm:text-5xl md:text-6xl">
              Faxina Residencial em Goiânia
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 font-body max-w-3xl mx-auto">
              A tranquilidade de ter seu lar impecável. Serviço de limpeza detalhado e de confiança, para você aproveitar o que realmente importa.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="font-bold h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transform transition-transform duration-300 hover:scale-105">
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-6 w-6" />
                  Solicitar Orçamento Gratuito
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="service-details" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Cuidado, Organização e Sua Rotina Facilitada</h2>
                <p className="mt-4 text-muted-foreground font-body text-lg">
                  Imagine chegar em casa e encontrar tudo limpo, cheiroso e organizado, sem ter se preocupado com nada. Com a ajuda de uma <Link href="/" className="text-primary font-semibold hover:underline">diarista em Goiânia</Link> de confiança, sua rotina fica mais leve e seu tempo livre, mais valioso.
                </p>
                <p className="mt-4 text-muted-foreground font-body text-lg">
                  Meu serviço de faxina residencial é pensado para entregar não apenas limpeza, mas um verdadeiro bem-estar, cuidando do seu lar como se fosse o meu.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline text-foreground mb-4">O que está incluso na faxina?</h3>
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
              <h3 className="text-2xl font-bold font-headline text-foreground">Sua casa merece esse cuidado.</h3>
              <p className="mt-2 text-muted-foreground font-body text-lg">Vamos conversar? Clique no botão e fale diretamente comigo para agendar sua faxina.</p>
              <Button asChild size="lg" className="mt-6 font-bold h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transform transition-transform duration-300 hover:scale-105">
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-6 w-6" />
                  Agendar Pelo WhatsApp
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
