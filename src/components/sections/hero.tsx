import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, Check } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20limpeza.";

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
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight uppercase font-headline sm:text-5xl md:text-6xl lg:text-7xl">
          Limpeza Profissional com <span className="text-primary">Confiança e Capricho</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-100 font-body max-w-2xl mx-auto">
          Atendimento especializado nos bairros Setor Bueno, Marista, Jardim Goiás, Oeste e toda a região de Goiânia.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="font-bold h-14 px-8 text-lg bg-green-500 hover:bg-green-600">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="h-6 w-6" />
              Solicite um Orçamento
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-bold h-14 px-8 text-lg">
            <Link href="#services">
              <Check className="h-6 w-6" />
              Nossos Serviços
            </Link>
          </Button>
        </div>
        <div className="mt-6">
            <p className="text-base text-gray-100">
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary">
                    <span className="font-normal">Fale conosco pelo WhatsApp:</span> (62) 99667-8388
                </Link>
            </p>
        </div>
      </div>
    </section>
  );
}
