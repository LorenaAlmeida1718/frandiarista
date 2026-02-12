import Link from 'next/link';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20limpeza.";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M12.04 2.02c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM12.04 20.15c-1.5 0-2.96-.4-4.22-1.13l-.3-.18-3.12.82.83-3.04-.2-.31c-.8-1.29-1.22-2.81-1.22-4.38 0-4.43 3.6-8.03 8.03-8.03s8.03 3.6 8.03 8.03-3.6 8.03-8.03 8.03zm4.52-6.13c-.25-.12-1.47-.72-1.7-.85-.23-.12-.39-.18-.56.12-.17.31-.64.85-.79 1.02s-.29.18-.56.06c-.25-.12-1.1-.4-2.1-1.29s-1.63-2-1.82-2.34c-.18-.33-.01-.51.11-.63s.25-.3.39-.45c.12-.12.18-.24.27-.39s.03-.3-.03-.42c-.06-.12-.56-1.35-.76-1.84s-.4-.42-.56-.42h-.54c-.17 0-.45.06-.68.3s-.88.85-.88 2.07.9 2.4 1.02 2.58c.12.18 1.76 2.67 4.28 3.78 2.52 1.1 2.52.75 2.97.72.45-.03 1.47-.6 1.68-1.18s.21-1.08.15-1.18c-.06-.12-.23-.18-.48-.3z" />
  </svg>
);


export default function WhatsAppButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-green-600 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="h-8 w-8" />
      </Link>
    </Button>
  );
}
