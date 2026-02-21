import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20agendar%20minha%20faxina.";

const points = [
  'Consultar disponibilidade',
  'Tirar dúvidas',
  'Solicitar Orçamento Gratuito'
];

export default function FinalCta() {
  return (
    <section id="contato" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Agende sua faxina com a Fran Diarista</h2>
        <p className="mt-4 text-muted-foreground font-body text-lg">Fale diretamente pelo WhatsApp para:</p>
        <ul className="my-6 inline-block text-left space-y-2">
          {points.map((point) => (
            <li key={point} className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span className="font-body text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button asChild size="lg" className="font-bold h-auto sm:h-16 py-4 px-6 sm:px-10 text-lg sm:text-xl bg-primary hover:bg-primary/90 text-primary-foreground w-full max-w-sm mx-auto sm:w-auto">
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              👉 Quero agendar minha faxina agora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
