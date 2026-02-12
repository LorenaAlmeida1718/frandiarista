import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20serviços%20de%20limpeza.";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/seed/hero-background/1920/1080"
        alt="Diarista em Goiânia realizando limpeza profissional"
        fill
        className="object-cover"
        data-ai-hint="professional cleaner"
        priority
      />
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight uppercase font-headline sm:text-5xl md:text-6xl lg:text-7xl">
          PRECISANDO DE DIARISTA EM GOIÂNIA?
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-100 font-body max-w-3xl mx-auto">
          Serviço de diarista e faxineira com atendimento rápido, profissionalismo e o cuidado que seu lar ou empresa merecem.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="font-bold h-16 px-10 text-xl bg-green-500 hover:bg-green-600 transform transition-transform duration-300 hover:scale-105">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="h-7 w-7" />
              Solicite um Orçamento Grátis
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
