'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';

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
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold font-headline text-background">
          Fran Diarista
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-background/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:flex" variant="outline">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5" />
                Fale Conosco
              </a>
            </Button>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-background hover:bg-background/20">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-foreground text-background w-[280px] p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-background/10">
                        <SheetClose asChild>
                            <Link href="/" className="text-2xl font-bold font-headline text-background">
                               Fran Diarista
                            </Link>
                        </SheetClose>
                    </div>
                    <nav className="flex flex-col gap-4 p-6">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.label}>
                          <Link
                            href={link.href}
                            className="text-lg font-medium text-background/80 transition-colors hover:text-primary"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                    <div className="mt-auto p-6">
                         <Button asChild className="w-full" variant="outline">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                <Phone className="h-5 w-5" />
                                Fale Conosco
                            </a>
                        </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
