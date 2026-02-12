import Link from "next/link";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Home, Sparkles, Building2, CalendarDays } from "lucide-react";

const services = [
  {
    title: "Faxina Residencial",
    description: "A limpeza completa para sua casa. Cuidado, organização e o bem-estar de um ambiente renovado para sua família.",
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    href: "/servicos/faxina-residencial-goiania",
  },
  {
    title: "Limpeza de Apartamento",
    description: "Serviço especializado que otimiza seu espaço e garante um lar sempre limpo e agradável, do seu jeito.",
    icon: <Home className="h-12 w-12 text-primary" />,
    href: "#", // Placeholder
  },
  {
    title: "Limpeza Comercial Leve",
    description: "Mantenha seu pequeno escritório, consultório ou sala comercial com um aspecto profissional e impecável.",
    icon: <Building2 className="h-12 w-12 text-primary" />,
    href: "#", // Placeholder
  },
  {
    title: "Diarista por Diária",
    description: "Flexibilidade para sua necessidade. Contrate uma diária e tenha a limpeza resolvida com previsibilidade e confiança.",
    icon: <CalendarDays className="h-12 w-12 text-primary" />,
    href: "#", // Placeholder
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">SERVIÇOS DE DIARISTA EM GOIÂNIA</h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">A solução de limpeza e organização que você precisa, com a confiança que seu lar merece.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="flex">
              <Card className="bg-card border-border shadow-lg overflow-hidden text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col w-full">
                <CardContent className="p-8 flex flex-col items-center flex-1">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                      {service.icon}
                    </div>
                  <CardTitle className="font-headline text-foreground text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="font-body text-base text-muted-foreground flex-1">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
