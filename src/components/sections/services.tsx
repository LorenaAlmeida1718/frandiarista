import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Building, Construction } from "lucide-react";

const services = [
  {
    title: "Limpeza Residencial",
    description: "Deixe sua casa brilhando com nossa limpeza detalhada e cuidadosa. Adaptamos o serviço às suas necessidades.",
    icon: <Home className="h-10 w-10 text-accent" />,
  },
  {
    title: "Limpeza Comercial",
    description: "Mantenha seu escritório ou loja com um ambiente limpo e profissional para seus clientes e colaboradores.",
    icon: <Building className="h-10 w-10 text-accent" />,
  },
  {
    title: "Faxina Pós-Obra",
    description: "Removemos toda a sujeira pesada e resíduos de construção, deixando seu novo espaço pronto para uso.",
    icon: <Construction className="h-10 w-10 text-accent" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-4 text-muted-foreground font-body">Oferecemos soluções completas de limpeza para sua necessidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-secondary p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-primary">{service.title}</CardTitle>
                <CardDescription className="font-body pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
