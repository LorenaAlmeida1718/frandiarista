import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Home, Sparkles } from "lucide-react";

const services = [
  {
    title: "Faxina Detalhada Residencial",
    description: "Uma limpeza completa para renovar seu lar. Cuido de todos os detalhes, da faxina pesada à organização, para deixar seu ambiente impecável e acolhedor. Ideal para faxinas quinzenais ou mensais.",
    icon: <Sparkles className="h-12 w-12 text-primary" />,
  },
  {
    title: "Limpeza de Manutenção Diária",
    description: "A solução para manter sua casa ou escritório sempre em ordem. Um serviço de diarista prático para o dia a dia, focado na limpeza e organização contínua, garantindo um espaço sempre agradável.",
    icon: <Home className="h-12 w-12 text-primary" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">SERVIÇOS DE DIARISTA EM GOIÂNIA</h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">A solução ideal em limpeza para sua necessidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border shadow-lg overflow-hidden text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
              <CardContent className="p-8 flex flex-col items-center flex-1">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                    {service.icon}
                  </div>
                <CardTitle className="font-headline text-foreground text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="font-body text-base text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
