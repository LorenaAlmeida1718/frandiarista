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
  keywords: ['faxina residencial goiânia', 'diarista para casa', 'limpeza de casa goiânia', 'faxineira residencial'],
};

const serviceIncludes = [
  'Limpeza de pisos e superfícies',
  'Higienização de banheiros e cozinha',
  'Remoção de pó e teias de aranha',
  'Limpeza de vidros e espelhos (parte interna)',
  'Organização geral dos ambientes',
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
              Sua casa limpa e aconchegante com um serviço de limpeza detalhado, realizado por uma diarista de confiança.
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
                <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Cuidado e Organização Para o Seu Lar</h2>
                <p className="mt-4 text-muted-foreground font-body text-lg">
                  O serviço de faxina residencial é a solução perfeita para quem busca praticidade e não abre mão de um ambiente impecável. Com a ajuda de uma <Link href="/" className="text-primary font-semibold hover:underline">diarista em Goiânia</Link> experiente, sua rotina fica mais leve e sua casa muito mais acolhedora.
                </p>
                <p className="mt-4 text-muted-foreground font-body text-lg">
                  Cada detalhe é pensado para entregar não apenas limpeza, mas uma verdadeira sensação de bem-estar e organização, respeitando seu espaço e suas preferências.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline text-foreground mb-4">O que está incluso no serviço?</h3>
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
              <h3 className="text-2xl font-bold font-headline text-foreground">Pronta para facilitar sua rotina?</h3>
              <p className="mt-2 text-muted-foreground font-body text-lg">Clique no botão abaixo e fale diretamente comigo para agendar sua faxina!</p>
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
