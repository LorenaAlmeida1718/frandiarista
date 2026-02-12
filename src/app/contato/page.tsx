import { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WhatsAppButton from '@/components/whatsapp-button';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contato | Fran Diarista em Goiânia',
  description: 'Entre em contato com a Fran Diarista para agendar sua limpeza em Goiânia. Atendimento via WhatsApp, e-mail. Veja nosso horário e endereço.',
};

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20serviços%20de%20limpeza.";

export default function ContatoPage() {
  return (
    <>
      <main className="bg-background">
        <section id="contact-page" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Entre em Contato</h1>
              <p className="mt-4 text-muted-foreground font-body text-lg">
                Fale com a Fran para tirar suas dúvidas, solicitar um orçamento ou agendar sua faxina.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-foreground text-xl">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-base text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(62) 99667-8388</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">E-mail</h3>
                      <a href="mailto:contato@frandiarista.online" className="hover:text-primary transition-colors">contato@frandiarista.online</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
                      <p>Segunda a Sábado, das 8:00 às 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Endereço de Referência</h3>
                      <p>Setor Urias Magalhães, Goiânia - GO</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col items-center justify-center text-center bg-secondary p-8 rounded-lg">
                  <h2 className="text-2xl font-bold font-headline text-foreground">Pronta para agendar?</h2>
                  <p className="mt-2 text-muted-foreground font-body">O jeito mais rápido de agendar é pelo WhatsApp. Clique no botão abaixo!</p>
                   <Button asChild size="lg" className="mt-6 font-bold h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transform transition-transform duration-300 hover:scale-105">
                        <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        Chamar no WhatsApp
                        </Link>
                    </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  );
}
