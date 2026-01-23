import Link from 'next/link';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold font-headline text-primary">Fran Diarista</h3>
            <p className="mt-4 text-sm">Sua solução em limpeza profissional em Goiânia.</p>
            <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
              <Link href="#" aria-label="Instagram de Fran Diarista" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook de Fran Diarista" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 md:justify-self-end">
            <h3 className="text-lg font-semibold font-headline text-white uppercase tracking-wider">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm font-body">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 text-primary"/>
                <span>(62) 99999-9999</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 text-primary"/>
                <span>Atendimento em toda Goiânia-GO e região.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} Fran Diarista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
