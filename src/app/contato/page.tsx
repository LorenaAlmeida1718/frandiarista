'use client';

import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const WHATSAPP_LINK = "https://wa.me/5562996678388?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20serviços%20de%20limpeza.";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "A mensagem precisa ter pelo menos 10 caracteres.",
  }),
});

export default function ContatoPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado por entrar em contato. Retornaremos em breve.",
    });
    form.reset();
  }

  return (
    <>
      <main className="bg-background">
        <section id="contact-page" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Entre em Contato</h1>
              <p className="mt-4 text-muted-foreground font-body text-lg">
                Escolha o melhor canal para falar com a Fran: WhatsApp, e-mail ou o formulário abaixo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-foreground text-xl">Informações e Acesso Rápido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-base text-muted-foreground">
                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp (Mais rápido)</h3>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(62) 99667-8388</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">E-mail</h3>
                      <a href="mailto:contato@frandiarista.online" className="hover:text-primary transition-colors">contato@frandiarista.online</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
                      <p>Segunda a Sábado, das 8:00 às 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Endereço de Referência</h3>
                      <p>Setor Urias Magalhães, Goiânia - GO</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-foreground text-xl">Ou envie uma mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 font-body">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input placeholder="seu.email@exemplo.com" {...field} />
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
                            <FormLabel>Telefone (Opcional)</FormLabel>
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
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Digite sua dúvida, solicitação de orçamento ou o que mais precisar."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full font-bold" disabled={form.formState.isSubmitting}>
                         {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </>
  );
}
