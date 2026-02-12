"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: 'Ana C.',
    location: 'Setor Bueno, Goiânia',
    text: 'A Fran é incrível! A casa fica impecável, cheirosa e organizada. É um alívio chegar do trabalho e encontrar tudo arrumado com tanto capricho. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    name: 'Carlos F.',
    location: 'Jardim Goiás, Goiânia',
    text: 'Contrato a Fran para a limpeza quinzenal do meu apartamento e o serviço é sempre excelente. Pontual, cuidadosa com os móveis e muito profissional. Vale cada centavo.',
    rating: 5,
  },
  {
    name: 'Mariana L.',
    location: 'Setor Marista, Goiânia',
    text: 'Finalmente encontrei uma diarista de confiança em Goiânia. A Fran é discreta, eficiente e deixa tudo brilhando. O banheiro e a cozinha ficam perfeitos!',
    rating: 5,
  },
  {
    name: 'Ricardo S.',
    location: 'Parque Amazônia, Goiânia',
    text: 'A geladeira ficou um brinco, nunca vi tão limpa! A Fran tirou tudo de dentro e organizou. Serviço impecável, sou cliente fiel agora.',
    rating: 5,
  },
  {
    name: 'Juliana P.',
    location: 'Setor Oeste, Goiânia',
    text: 'Chegar em casa e ver tudo organizado, sem bagunça espalhada, não tem preço. A Fran tem um toque especial para arrumação, além da limpeza nota 10.',
    rating: 5,
  },
  {
    name: 'Fernanda M.',
    location: 'Alphaville, Goiânia',
    text: 'Precisava de alguém de confiança para limpar o escritório e a Fran foi super discreta e profissional. Mal notei que ela estava aqui, mas o resultado foi incrível.',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">
            O que os clientes dizem
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            A satisfação de quem confia no trabalho da Fran é a maior recompensa.
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-card border-border shadow-lg flex flex-col h-full">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="font-headline text-foreground text-xl">{testimonial.name}</CardTitle>
                          <p className="text-sm text-muted-foreground font-body">{testimonial.location}</p>
                        </div>
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="font-body text-base text-muted-foreground">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-12" />
          <CarouselNext className="right-2 sm:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
