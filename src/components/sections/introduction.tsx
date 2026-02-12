import Link from "next/link";

export default function Introduction() {
  return (
    <section id="introduction" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl uppercase">Diarista em Goiânia para quem busca confiança, capricho e tranquilidade</h2>
        <p className="mt-4 text-muted-foreground font-body text-lg">
          Se você procura uma <Link href="/" className="text-primary font-semibold hover:underline">diarista em Goiânia</Link> para cuidar da limpeza da sua casa com atenção, capricho e responsabilidade, a Fran oferece um serviço humano, pontual e feito nos mínimos detalhes — como se estivesse cuidando da própria casa.
        </p>
      </div>
    </section>
  );
}
