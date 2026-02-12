import { Check, Lock, UserCheck, Clock, MessageSquare, Star } from 'lucide-react';

const securityPoints = [
  { text: 'Comunicação clara', icon: <MessageSquare className="h-6 w-6 text-primary" /> },
  { text: 'Discrição', icon: <Lock className="h-6 w-6 text-primary" /> },
  { text: 'Respeito ao seu espaço', icon: <UserCheck className="h-6 w-6 text-primary" /> },
  { text: 'Cuidado com seus objetos', icon: <Star className="h-6 w-6 text-primary" /> },
  { text: 'Compromisso com horário', icon: <Clock className="h-6 w-6 text-primary" /> },
];

const idealFor = [
  'Para quem trabalha fora',
  'Para quem tem rotina corrida',
  'Para quem quer mais tempo livre',
  'Para quem valoriza casa limpa e organizada',
  'Para quem busca uma diarista em Goiânia confiável',
];

export default function Trust() {
  return (
    <section id="trust" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-20">
        <div className="bg-secondary p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold font-headline text-foreground">Segurança, confiança e tranquilidade 🔒✨</h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Chamar uma diarista vai muito além da limpeza — envolve confiança. Por isso, a Fran trabalha com:
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {securityPoints.map((point) => (
              <div key={point.text} className="flex flex-col items-center text-center gap-2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background mb-3 shadow-sm">
                    {point.icon}
                </div>
                <span className="font-body text-foreground font-medium text-sm">{point.text}</span>
              </div>
            ))}
          </div>
            <p className="mt-8 text-foreground font-semibold font-body text-lg">Seu lar em boas mãos, do início ao fim.</p>
        </div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="text-center">
            <h3 className="text-3xl font-bold font-headline text-foreground mb-4">Para quem esse serviço é ideal?</h3>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {idealFor.map((item) => (
                <li key={item} className="flex items-center bg-secondary p-4 rounded-md shadow-sm">
                  <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span className="font-body text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
