import { XCircle } from 'lucide-react';

const painPoints = [
  'o ralo do banheiro visivelmente sujo',
  'a geladeira mal limpa, sem tirar nada do lugar',
  'paninhos de limpeza esquecidos pela casa',
  'cantos que claramente não foram limpos',
  'aquela sensação constante de que a faxina foi feita correndo e sem capricho',
  'vidros e espelhos manchados',
];

export default function Frustration() {
  return (
    <section id="frustration" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold font-headline text-foreground sm:text-4xl">A rotina é puxada.</h2>
        <p className="mt-4 text-muted-foreground font-body text-lg">
          Você sai cedo, trabalha o dia inteiro, resolve mil coisas ao mesmo tempo e, quando chega em casa, tudo o que queria era descansar.
        </p>
        <p className="mt-6 text-foreground font-body text-lg font-semibold">Mas encontra:</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {painPoints.map((item) => (
            <div key={item} className="flex items-center gap-3 bg-card p-4 rounded-md shadow-sm">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
              <span className="font-body text-card-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 font-body text-lg text-foreground font-semibold">
          Você olha… e sabe: não ficou do jeito que deveria.
        </p>
        <p className="mt-4 text-muted-foreground font-body text-lg">
          E é aí que bate aquela frustração: você paga, confia… e mesmo assim sente que precisa refazer parte da limpeza.
        </p>
        <div className="mt-12 border-t border-border pt-12">
            <p className="text-primary font-headline text-xl uppercase tracking-wider">Foi exatamente por isso que nasceu a Fran Diarista.</p>
          <h3 className="mt-2 text-3xl font-bold font-headline text-foreground">A proposta é simples: fazer com que você chegue em casa e sinta alívio, conforto e tranquilidade.</h3>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Nada de faxina feita às pressas. Nada de serviço malfeito. Aqui, a limpeza é feita com calma, cuidado e atenção aos detalhes — porque sua casa merece respeito 🏡✨
          </p>
        </div>
          <div className="mt-12 text-center bg-primary text-primary-foreground p-8 rounded-lg shadow-lg">
            <p className="text-2xl font-bold">Transformar sua casa em um ambiente limpo, organizado e agradável, em poucas horas, sem correria e sem dor de cabeça.</p>
        </div>
      </div>
    </section>
  );
}
