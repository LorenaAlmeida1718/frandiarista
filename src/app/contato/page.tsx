'use client';

import { Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import WhatsAppButton from '@/components/whatsapp-button';
import Link from 'next/link';
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
const WHATSAPP_LINK_DIRECT = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20serviços%20de%20limpeza.`;

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
                  <p className="mt-2 text-muted-foreground font-body">Envie uma mensagem ou preencha os campos abaixo!</p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-14">
                    <Link href={WHATSAPP_LINK_DIRECT} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-6 w-6" />
                        Chamar no WhatsApp
                    </Link>
                  </Button>

                  <div className="my-8 flex items-center">
                    <div className="flex-grow border-t border-border"></div>
                    <span className="flex-shrink mx-4 text-muted-foreground font-body text-sm uppercase">Ou</span>
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
