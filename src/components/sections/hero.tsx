import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20agendar%20uma%20limpeza.";

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
        <h1 className="text-4xl font-bold tracking-tight uppercase font-headline sm:text-5xl">
          Faxina em Goiânia com diarista de confiança — sem estresse
        </h1>
        <h2 className="mt-6 text-xl leading-8 text-gray-200 font-body max-w-3xl mx-auto sm:text-2xl">
          Fran Diarista | Faxina residencial e limpeza de apartamentos em Goiânia
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
           <Button asChild size="lg" className="font-bold h-14 px-8 text-lg bg-green-600 hover:bg-green-700 text-white transform transition-transform duration-300 hover:scale-105">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Chamar no WhatsApp
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold h-14 px-8 text-lg bg-transparent text-background border-background hover:bg-background/10 transform transition-transform duration-300 hover:scale-105">
            <Link href="#services">
                Ver Nossos Serviços
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-lg text-gray-200 font-body max-w-3xl mx-auto">
          Cuidado, capricho e responsabilidade em cada detalhe da sua casa.
        </p>
      </div>
    </section>
  );
}
