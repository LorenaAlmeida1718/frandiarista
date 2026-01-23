import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Home, Building, Construction } from "lucide-react";
import Image from 'next/image';

const services = [
  {
    title: "Limpeza Residencial",
    description: "Deixe sua casa brilhando com nossa limpeza detalhada e cuidadosa. Adaptamos o serviço às suas necessidades.",
    icon: <Home className="h-10 w-10 text-primary" />,
    image: {
        id: "residential-cleaning",
        src: "https://picsum.photos/seed/residential/600/400",
        hint: "clean living room"
    }
  },
  {
    title: "Limpeza Comercial",
    description: "Mantenha seu escritório ou loja com um ambiente limpo e profissional para seus clientes e colaboradores.",
    icon: <Building className="h-10 w-10 text-primary" />,
    image: {
        id: "commercial-cleaning",
        src: "https://picsum.photos/seed/commercial/600/400",
        hint: "clean office"
    }
  },
  {
    title: "Faxina Pós-Obra",
    description: "Removemos toda a sujeira pesada e resíduos de construção, deixando seu novo espaço pronto para uso.",
    icon: <Construction className="h-10 w-10 text-primary" />,
    image: {
        id: "post-construction-cleaning",
        src: "https://picsum.photos/seed/post-construction/600/400",
        hint: "construction cleaning"
    }
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl uppercase">Nossos Serviços</h2>
          <p className="mt-4 text-muted-foreground font-body">Oferecemos soluções completas de limpeza para sua necessidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-secondary border-border overflow-hidden text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="relative w-full h-56">
                  <Image
                      src={service.image.src}
                      alt={service.title}
                      fill
                      className="object-cover"
                      data-ai-hint={service.image.hint}
                  />
              </div>
              <CardContent className="p-6">
                  <div className="mb-4 inline-block bg-background p-3 rounded-full">
                    {service.icon}
                  </div>
                <CardTitle className="font-headline text-white text-2xl">{service.title}</CardTitle>
                <CardDescription className="font-body pt-2 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
