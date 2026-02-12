import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20serviços%20de%20limpeza.";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="hero" className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-background">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Diarista em Goiânia realizando limpeza profissional"
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight uppercase font-headline sm:text-5xl md:text-6xl lg:text-7xl">
          SUA CASA OU ESCRITÓRIO LIMPO E ORGANIZADO
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-200 font-body max-w-3xl mx-auto">
          Serviço profissional de diarista em Goiânia para quem busca qualidade, confiança e um ambiente impecável. Deixe a limpeza pesada comigo e aproveite seu tempo.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="font-bold h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transform transition-transform duration-300 hover:scale-105">
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-6 w-6" />
                Chamar no WhatsApp
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold h-14 px-8 text-lg text-background border-background bg-transparent hover:bg-background hover:text-foreground transform transition-transform duration-300 hover:scale-105">
              <Link href="#services">
                Ver Serviços
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-gray-200 font-body">
            Precisa de um orçamento gratuito? Fale conosco agora mesmo!
          </p>
        </div>
      </div>
    </section>
  );
}