
import Link from "next/link";
import { Metadata } from "next";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sparkles, Building2, Home, CalendarDays, Clock } from "lucide-react";
import WhatsAppButton from "@/components/whatsapp-button";

const services = [
  {
    title: "Faxina residencial em Goiânia",
    description: "Limpeza completa da casa, com organização básica e cuidado em cada ambiente.",
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    href: "/servicos/faxina-residencial-goiania",
  },
  {
    title: "Diarista por diária em Goiânia",
    description: "Ideal para quem precisa de uma limpeza completa sem compromisso fixo.",
    icon: <CalendarDays className="h-12 w-12 text-primary" />,
    href: "/servicos/diarista-por-diaria-goiania",
  },
  {
    title: "Limpeza de apartamento em Goiânia",
    description: "Faxina detalhada para apartamentos, com atenção especial em cozinha, banheiros e áreas comuns.",
    icon: <Home className="h-12 w-12 text-primary" />,
    href: "#",
  },
  {
    title: "Limpeza semanal",
    description: "Manutenção contínua para quem quer a casa sempre limpa e organizada.",
    icon: <Clock className="h-12 w-12 text-primary" />,
    href: "#",
  },
   {
    title: "Limpeza quinzenal",
    description: "Faxina periódica para manter tudo em ordem sem sobrecarregar a rotina.",
    icon: <CalendarDays className="h-12 w-12 text-primary" />,
    href: "#",
  },
  {
    title: "Limpeza comercial leve",
    description: "Limpeza de salas, consultórios e pequenos escritórios, com organização, cuidado e discrição.",
    icon: <Building2 className="h-12 w-12 text-primary" />,
    href: "#",
  },
];

export const metadata: Metadata = {
  title: 'Serviços de Diarista em Goiânia | Fran Diarista',
  description: 'Conheça todos os serviços de limpeza residencial e comercial oferecidos pela Fran Diarista em Goiânia. Faxina completa, diária avulsa, limpeza de apartamento e mais.',
};

export default function ServicosPage() {
  return (
    <>
      <main className="bg-background">
        <section id="services-page" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Serviços de Diarista em Goiânia</h1>
              <p className="mt-4 text-muted-foreground font-body text-lg">Serviços de limpeza residencial e comercial, realizados com o capricho e a confiança que você merece. Atendimento em Goiânia e região metropolitana.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="flex">
                  <Card className="bg-card border-border shadow-lg overflow-hidden text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col w-full">
                    <CardContent className="p-8 flex flex-col items-center flex-1">
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                          {service.icon}
                        </div>
                      <CardTitle className="font-headline text-foreground text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="font-body text-base text-muted-foreground flex-1">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  );
}
