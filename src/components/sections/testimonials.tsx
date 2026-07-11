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
import { staticTestimonials } from '@/lib/static-testimonials';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

export default function Testimonials() {
  const [allTestimonials, setAllTestimonials] = React.useState(staticTestimonials);
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    try {
      const localData = localStorage.getItem('fran-diarista:depoimentos');
      if (localData) {
        const parsed = JSON.parse(localData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Filter to only include ratings with 4 and 5 stars for the home page
          const formattedLocal = parsed
            .filter((item: any) => Number(item.rating) >= 4)
            .map((item: any) => ({
              name: `${item.name} (Você)` || 'Anônimo',
              location: item.location || 'Goiânia',
              text: item.text || '',
              rating: Number(item.rating) || 5,
            }));
          setAllTestimonials([...formattedLocal, ...staticTestimonials]);
        }
      }
    } catch (e) {
      console.error('Error loading custom testimonials:', e);
    }
  }, []);

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
            {allTestimonials.map((testimonial, index) => (
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
