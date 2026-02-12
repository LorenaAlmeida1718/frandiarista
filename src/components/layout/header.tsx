import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20serviços%20de%20limpeza.";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-foreground shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold font-headline text-background">
          Fran Diarista
        </Link>
        <Button asChild className="hidden sm:flex" variant="outline">
          <a href="tel:+5562996678388">
            <Phone className="h-5 w-5" />
            Ligue Agora
          </a>
        </Button>
      </div>
    </header>
  );
}
