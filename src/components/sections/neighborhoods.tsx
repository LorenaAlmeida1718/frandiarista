"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { MapPin } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";

const neighborhoods = [
  'Setor Bueno', 'Setor Marista', 'Jardim Goiás', 'Setor Oeste', 'Setor Sul', 'Jardim América', 'Parque Amazônia', 'Setor Bela Vista', 'Setor Pedro Ludovico', 'Alto da Glória', 'Setor Leste Universitário', 'Jardim Atlântico', 'Setor Nova Suíça', 'Vila Nova', 'Centro', 'Campinas', 'Cidade Jardim', 'Setor Coimbra', 'Setor Negrão de Lima', 'Parque Anhanguera'
];

export default function Neighborhoods() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="neighborhoods" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-3">
            <MapPin className="h-8 w-8 text-primary flex-shrink-0"/>
            <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">
              Atendimento em toda Goiânia e região
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            A Fran oferece atendimento de diarista nos principais bairros de Goiânia e região metropolitana, incluindo Setor Bueno, Setor Marista, Jardim Goiás e muitos outros, garantindo pontualidade e um serviço de limpeza de confiança perto de você.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {neighborhoods.map((neighborhood) => (
              <CarouselItem key={neighborhood} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-card border-border shadow-sm">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <MapPin className="h-6 w-6 text-primary mb-2"/>
                        <p className="font-body text-sm font-medium text-foreground">{neighborhood}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
