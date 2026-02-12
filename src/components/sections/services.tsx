import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sparkles, CalendarDays, Building } from "lucide-react";

const services = [
  {
    title: "Faxina Detalhada",
    description: "Sua casa limpa como nova! Ideal para quem busca uma limpeza completa e minuciosa de todos os cômodos, focando em detalhes que fazem a diferença. Perfeita para dar aquela renovada no seu lar ou prepará-lo para momentos especiais.",
    icon: <Sparkles className="h-12 w-12 text-primary" />,
  },
  {
    title: "Limpeza de Manutenção",
    description: "Mantenha seu lar sempre limpo e agradável sem esforço. Com a limpeza de manutenção, sua casa fica sempre pronta para te receber, garantindo um ambiente organizado e higienizado no dia a dia. Contrate com a frequência que preferir, seja semanal ou quinzenal.",
    icon: <CalendarDays className="h-12 w-12 text-primary" />,
  },
  {
    title: "Limpeza Comercial",
    description: "A imagem do seu negócio começa pela limpeza. Ofereço um serviço discreto e eficiente para escritórios, consultórios e pequenas lojas, garantindo um ambiente profissional e acolhedor para seus clientes e colaboradores. Horários flexíveis para não atrapalhar sua rotina.",
    icon: <Building className="h-12 w-12 text-primary" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl">SERVIÇOS PENSADOS PARA VOCÊ</h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">Soluções práticas e eficientes para a limpeza do seu espaço.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
