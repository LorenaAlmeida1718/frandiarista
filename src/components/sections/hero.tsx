import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WHATSAPP_LINK = "https://wa.me/5562999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20limpeza.";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/seed/hero-background/1920/1080"
        alt="Profissional de limpeza em uma casa moderna"
        fill
        className="object-cover"
        data-ai-hint="clean house"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight uppercase font-headline sm:text-5xl md:text-6xl lg:text-7xl">
          Limpeza Profissional com <span className="text-primary">Confiança e Capricho</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-200 font-body max-w-2xl mx-auto">
          Atendimento especializado nos bairros Setor Bueno, Marista, Jardim Goiás, Oeste e toda a região de Goiânia.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 text-lg">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento via WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
