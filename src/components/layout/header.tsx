import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 z-40 w-full bg-transparent">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-3xl font-bold font-headline text-primary">
          Fran Diarista
        </Link>
        <div className="flex items-center gap-4">
           <a href="tel:+5562996678388" className="flex items-center gap-2 text-lg font-semibold text-white hover:text-primary transition-colors">
             <Phone className="h-5 w-5" />
             <span className="hidden sm:inline">(62) 99667-8388</span>
           </a>
        </div>
      </div>
    </header>
  );
}
