'use client';

import { Send, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import WhatsAppButton from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5562996678388";

const formSchema = z.object({
  name: z.string().optional(),
  phone: z.string().min(10, {
    message: "Por favor, insira um WhatsApp válido com DDD.",
  }),
  message: z.string().min(10, {
    message: "Descreva o serviço que você precisa (mínimo 10 caracteres).",
  }),
});

export default function ContatoPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, message, phone } = values;
    const text = `Olá, Fran! Meu nome é ${name || 'Não informado'}. Meu WhatsApp é ${phone}. Gostaria de um orçamento para: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando para o WhatsApp...",
      description: "Sua mensagem está pronta para ser enviada.",
    });
    form.reset();
  }

  return (
    <>
      <main className="bg-secondary">
        <section id="contact-page" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 flex justify-center">
            <Card className="bg-card border-border shadow-lg w-full max-w-2xl">
                <CardHeader className="text-center p-8">
                  <h1 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Orçamento Rápido e Gratuito</h1>
                  <p className="mt-2 text-muted-foreground font-body">Prefere preencher seus dados? O formulário monta a mensagem para você. Ou, se preferir, entre em contato direto por um de nossos canais.</p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  
                  <div className="space-y-4 font-body text-muted-foreground text-center mb-8">
                      <div className="flex items-center gap-3 justify-center">
                          <Mail className="h-5 w-5 text-primary"/>
                          <a href="mailto:contato@frandiarista.online" className="hover:text-primary">contato@frandiarista.online</a>
                      </div>
                      <div className="flex items-center gap-3 justify-center">
                          <Phone className="h-5 w-5 text-primary"/>
                          <span>(62) 99667-8388</span>
                      </div>
                      <div className="flex items-center gap-3 justify-center">
                          <Clock className="h-5 w-5 text-primary"/>
                          <span>Seg. a Sáb. das 8h às 18h</span>
                      </div>
                  </div>

                  <div className="my-8 flex items-center">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink mx-4 text-muted-foreground font-body text-sm uppercase">Ou solicite seu orçamento</span>
                    <div className="flex-grow border-t border-border"></div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 font-body">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Seu Nome (Opcional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: João Silva" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Seu WhatsApp</FormLabel>
                            <FormControl>
                              <Input placeholder="(62) 99999-9999" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Qual serviço você precisa?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Ex: Preciso de uma faxina completa em um apartamento no Setor Bueno."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full font-bold h-14 text-lg bg-foreground hover:bg-foreground/90 text-background" disabled={form.formState.isSubmitting}>
                         {form.formState.isSubmitting ? 'Enviando...' : 'Solicitar Orçamento via WhatsApp'}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </Form>
                  
                </CardContent>
              </Card>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  );
}
