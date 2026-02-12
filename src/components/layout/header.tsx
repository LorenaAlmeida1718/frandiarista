'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20serviços%20de%20limpeza.";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/#about", label: "Sobre" },
  { href: "/#faq", label: "Dúvidas" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-foreground shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-3 px-4 py-4 md:h-20 md:flex-nowrap">
        <div className="flex-shrink-0 order-1">
          <Link href="/" className="text-2xl font-bold font-headline text-background">
            Fran Diarista
          </Link>
        </div>

        <div className="order-2 md:order-3">
          <Button asChild variant="outline">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline ml-2">Fale Conosco</span>
            </a>
          </Button>
        </div>
        
        <nav className="w-full order-3 md:w-auto md:order-2 md:ml-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-medium text-background/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
        </nav>
      </div>
    </header>
  );
}
