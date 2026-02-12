import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20serviços%20de%20limpeza.";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="hero" className="relative w-full h-auto py-24 md:py-32 flex items-center justify-center text-center text-background">
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
        <h1 className="text-4xl font-bold tracking-tight uppercase font-headline sm:text-5xl md:text-6xl">
          Faxina em Goiânia com diarista de confiança: sua casa limpa, organizada e agradável — sem estresse
        </h1>
        <h2 className="mt-6 text-xl leading-8 text-gray-200 font-body max-w-3xl mx-auto sm:text-2xl">
          Fran Diarista — diarista em Goiânia especializada em faxina residencial, apartamentos e limpeza leve comercial
        </h2>
        <p className="mt-4 text-base text-gray-300 font-body max-w-2xl mx-auto">
          Se você procura uma <Link href="/" className="font-semibold text-primary hover:underline">diarista em Goiânia</Link> para cuidar da limpeza da sua casa com atenção, capricho e responsabilidade, a Fran oferece um serviço humano, pontual e feito nos mínimos detalhes — como se estivesse cuidando da própria casa.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
