import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold font-headline">Fran Diarista</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">Sua solução em limpeza profissional.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline">Contato (NAP)</h3>
            <ul className="mt-2 space-y-1 text-sm text-primary-foreground/80 font-body">
              <li><strong>Nome:</strong> Fran Diarista</li>
              <li><strong>Endereço:</strong> Goiânia-GO, Brasil</li>
              <li><strong>Telefone:</strong> (62) 99999-9999</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
              <Link href="#" aria-label="Instagram de Fran Diarista" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook de Fran Diarista" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60 font-body">
          <p>&copy; {new Date().getFullYear()} Fran Diarista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
