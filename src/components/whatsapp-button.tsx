import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = "https://wa.me/5562999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20limpeza.";

export default function WhatsAppButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-accent shadow-lg transition-transform hover:scale-110 hover:bg-accent/90 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <MessageSquare className="h-8 w-8 text-white" />
      </Link>
    </Button>
  );
}
