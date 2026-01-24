import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Home, Building, Construction } from "lucide-react";

const services = [
  {
    title: "Limpeza Residencial",
    description: "Deixe sua casa brilhando com nossa limpeza detalhada e cuidadosa. Adaptamos o serviço às suas necessidades.",
    icon: <Home className="h-12 w-12 text-primary" />,
  },
  {
    title: "Limpeza Comercial",
    description: "Mantenha seu escritório ou loja com um ambiente limpo e profissional para seus clientes e colaboradores.",
    icon: <Building className="h-12 w-12 text-primary" />,
  },
  {
    title: "Faxina Pós-Obra",
    description: "Removemos toda a sujeira pesada e resíduos de construção, deixando seu novo espaço pronto para uso.",
    icon: <Construction className="h-12 w-12 text-primary" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl">NOSSOS SERVIÇOS</h2>
          <p className="mt-4 text-muted-foreground font-body">Oferecemos soluções completas de limpeza para sua necessidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-background border-border shadow-lg overflow-hidden text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="p-8 flex flex-col items-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                    {service.icon}
                  </div>
                <CardTitle className="font-headline text-foreground text-2xl">{service.title}</CardTitle>
                <CardDescription className="font-body pt-2 text-base text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
