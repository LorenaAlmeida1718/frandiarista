'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Star, Send, ArrowLeft, CheckCircle2, MessageSquare, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import Link from 'next/link';
import { staticTestimonials } from '@/lib/static-testimonials';

const WHATSAPP_NUMBER = '5562996678388';

const formSchema = z.object({
  name: z.string()
    .min(2, { message: 'Por favor, insira pelo menos 2 caracteres.' })
    .max(30, { message: 'O nome deve ter no máximo 30 caracteres.' })
    .refine((val) => {
      const parts = val.trim().split(/\s+/);
      if (parts.length === 1) return true;
      if (parts.length === 2) {
        const second = parts[1].replace(/\.$/, '');
        return second.length === 1;
      }
      return false;
    }, {
      message: 'Insira o primeiro nome e apenas a inicial do sobrenome (Ex: Maria S. ou Maria S).',
    }),
  sector: z.string()
    .min(3, { message: 'Por favor, insira o nome do setor/bairro.' })
    .max(40, { message: 'O nome do setor deve ter no máximo 40 caracteres.' }),
  rating: z.number().min(1).max(5),
  text: z.string()
    .min(10, { message: 'O depoimento deve ter no mínimo 10 caracteres.' })
    .max(500, { message: 'O depoimento deve ter no máximo 500 caracteres.' }),
});

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`h-4 w-4 ${
          star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/20 fill-transparent'
        }`}
      />
    ))}
  </div>
);

export default function DepoimentoPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState<z.infer<typeof formSchema> | null>(null);
  const [localReviews, setLocalReviews] = React.useState<any[]>([]);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      sector: '',
      rating: 5,
      text: '',
    },
  });

  const ratingValue = form.watch('rating');

  // Load reviews from localStorage
  const loadLocalReviews = () => {
    try {
      const localData = localStorage.getItem('fran-diarista:depoimentos');
      if (localData) {
        setLocalReviews(JSON.parse(localData));
      }
    } catch (e) {
      console.error('Error loading local reviews:', e);
    }
  };

  React.useEffect(() => {
    loadLocalReviews();
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const newTestimonial = {
        name: values.name,
        location: `${values.sector}, Goiânia`,
        text: values.text,
        rating: values.rating,
        date: new Date().toISOString(),
        isLocal: true,
      };

      const existingData = localStorage.getItem('fran-diarista:depoimentos');
      const testimonials = existingData ? JSON.parse(existingData) : [];
      testimonials.unshift(newTestimonial);
      localStorage.setItem('fran-diarista:depoimentos', JSON.stringify(testimonials));

      // Reload local reviews to update list immediately
      loadLocalReviews();

      setFormData(values);
      setSubmitted(true);

      toast({
        title: 'Depoimento enviado localmente!',
        description: 'Sua avaliação foi salva e já aparece no site.',
      });
    } catch (error) {
      console.error('Erro ao salvar depoimento:', error);
      toast({
        variant: 'destructive',
        title: 'Erro ao enviar',
        description: 'Não foi possível salvar o seu depoimento no momento.',
      });
    }
  }

  function handleSendWhatsApp() {
    if (!formData) return;

    const stars = '⭐'.repeat(formData.rating);
    const text = `Olá, Fran! Deixei uma avaliação no seu site:\n\n*Nome:* ${formData.name}\n*Setor:* ${formData.sector}\n*Avaliação:* ${stars} (${formData.rating}/5)\n*Depoimento:* "${formData.text}"`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  }

  // Combine all reviews (local + static) with local reviews showing first
  const allReviews = [
    ...localReviews.map(item => ({ ...item, isLocal: true })),
    ...staticTestimonials
  ];

  return (
    <main className="bg-secondary min-h-[calc(100vh-80px-300px)] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o início
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Form / Success Card */}
          <div className="lg:col-span-5 w-full">
            {!submitted ? (
              <Card className="bg-card border-border shadow-xl">
                <CardHeader className="text-center p-6 md:p-8 border-b border-border bg-foreground text-background rounded-t-lg">
                  <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold font-headline uppercase tracking-wider text-background">
                    Deixe seu Depoimento
                  </CardTitle>
                  <CardDescription className="text-background/80 font-body text-sm mt-1">
                    Sua opinião é muito importante para nós! Conte como foi a sua experiência com a Fran.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 space-y-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 font-body">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Seu Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Maria S." {...field} className="h-11 border-border focus-visible:ring-primary" />
                            </FormControl>
                            <FormDescription className="text-xs text-muted-foreground">
                              Digite seu primeiro nome e a inicial do sobrenome (Ex: Maria S. ou Maria S).
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="sector"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Setor / Bairro</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Setor Bueno" {...field} className="h-11 border-border focus-visible:ring-primary" />
                            </FormControl>
                            <FormDescription className="text-xs text-muted-foreground">
                              Setor de Goiânia onde a limpeza ou serviço foi realizado.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-foreground font-semibold">Sua Avaliação (Estrelas)</FormLabel>
                            <FormControl>
                              <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    type="button"
                                    onClick={() => field.onChange(star)}
                                    className="p-1 hover:scale-110 transition-transform focus:outline-none"
                                  >
                                    <Star
                                      className={`h-8 w-8 transition-colors ${
                                        star <= ratingValue
                                          ? 'fill-yellow-400 text-yellow-400'
                                          : 'text-muted-foreground/30 fill-transparent'
                                      }`}
                                    />
                                  </button>
                                ))}
                                <span className="ml-2 text-sm font-semibold text-muted-foreground">
                                  {ratingValue} de 5 estrelas
                                </span>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Escreva seu Depoimento</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Conte os detalhes do serviço da Fran... Ficou limpo, cheiroso, organizado? Você recomenda?"
                                className="min-h-32 resize-none border-border focus-visible:ring-primary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full font-bold h-12 text-base bg-foreground hover:bg-foreground/90 text-background">
                        Enviar Depoimento
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card border-border shadow-xl">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold font-headline uppercase text-foreground">Muito obrigado!</h2>
                    <p className="text-muted-foreground font-body text-base">
                      Seu depoimento foi salvo com sucesso e já está aparecendo no carrossel de depoimentos do site neste dispositivo.
                    </p>
                  </div>

                  <div className="p-4 bg-secondary rounded-lg border border-border text-left font-body space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{formData?.name}</span>
                      <div className="flex gap-0.5">
                        {[...Array(formData?.rating || 5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground block">{formData?.sector}, Goiânia</span>
                    <p className="text-sm italic text-muted-foreground">"{formData?.text}"</p>
                  </div>

                  <div className="my-6 border-t border-border"></div>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-foreground font-body">
                      Quer ajudar a divulgar o trabalho da Fran?
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      Envie seu depoimento para o WhatsApp dela para que ela possa publicá-lo permanentemente no site!
                    </p>
                    <Button onClick={handleSendWhatsApp} className="w-full font-bold h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
                      Enviar Depoimento para o WhatsApp
                    </Button>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <Button variant="outline" onClick={() => setSubmitted(false)} className="w-full font-medium h-11 border-border text-foreground hover:bg-secondary">
                      Escrever Outro Depoimento
                    </Button>
                    <Button variant="link" onClick={() => router.push('/')} className="text-muted-foreground hover:text-foreground font-body font-medium">
                      Voltar para a página inicial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Col 2: Testimonials List */}
          <div className="lg:col-span-7 w-full">
            <Card className="bg-card border-border shadow-xl">
              <CardHeader className="p-6 border-b border-border bg-muted/30">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-foreground" />
                  <div>
                    <CardTitle className="text-xl font-bold font-headline text-foreground uppercase tracking-wide">
                      Mural de Avaliações
                    </CardTitle>
                    <CardDescription className="font-body text-xs mt-0.5">
                      Visualizando todas as {allReviews.length} avaliações enviadas pelos nossos clientes.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 max-h-[620px] overflow-y-auto pr-2">
                  {allReviews.map((review, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border transition-all ${
                        review.isLocal 
                          ? 'bg-primary/5 border-primary/20 hover:bg-primary/10 shadow-sm' 
                          : 'bg-card border-border hover:border-muted-foreground/30 shadow-xs'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground font-headline text-lg">
                            {review.name} {review.isLocal && <span className="text-xs font-body font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-1.5">Você</span>}
                          </h4>
                          <span className="text-xs text-muted-foreground font-body">{review.location}</span>
                        </div>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="text-muted-foreground text-sm font-body italic leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
