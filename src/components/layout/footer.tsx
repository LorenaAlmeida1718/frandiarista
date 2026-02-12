import Link from 'next/link';
import { Instagram, Facebook, Phone, MapPin, AtSign, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-2xl font-bold font-headline text-primary">Fran Diarista</h3>
            <p className="mt-4 text-sm">Serviço de diarista e faxineira em Goiânia e região. Qualidade e confiança para seu lar ou empresa.</p>
            <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
              <Link href="#" aria-label="Instagram de Fran Diarista" className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook de Fran Diarista" className="text-background/80 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-headline text-background uppercase tracking-wider">Links Rápidos</h3>
            <ul className="mt-4 space-y-2 text-sm font-body">
                <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
                <li><Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
                <li><Link href="/#about" className="hover:text-primary transition-colors">Sobre</Link></li>
                <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
                <li><Link href="/termos-de-uso" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                <li><Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-headline text-background uppercase tracking-wider">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm font-body">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 text-primary"/>
                <span>(62) 99667-8388 (WhatsApp)</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <AtSign className="h-5 w-5 text-primary"/>
                <a href="mailto:contato@frandiarista.online" className="hover:text-primary transition-colors">contato@frandiarista.online</a>
              </li>
               <li className="flex items-center justify-center md:justify-start gap-3">
                <Clock className="h-5 w-5 text-primary"/>
                <span>Seg. a Sáb. das 8h às 18h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-headline text-background uppercase tracking-wider">Nossa Localização</h3>
            <ul className="mt-4 space-y-2 text-sm font-body">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 text-primary"/>
                <span>Setor Urias Magalhães, Goiânia - GO</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs text-background/60 font-body">
          <p>&copy; {new Date().getFullYear()} Fran Diarista. Todos os direitos reservados.</p>
          <p className="mt-2">
            Feito por Lorena Almeida - <a href="https://wa.me/559484276512" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Fale comigo</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
