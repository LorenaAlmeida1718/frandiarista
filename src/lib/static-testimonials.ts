export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  date?: string;
  isLocal?: boolean;
}

export const staticTestimonials: Testimonial[] = [
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
  {
    name: 'Patrícia R.',
    location: 'Setor Sul, Goiânia',
    text: 'A Fran é super caprichosa! Limpou as janelas e os trilhos que estavam pretos de poeira. Indico de olhos fechados pela atenção aos detalhes.',
    rating: 5,
  },
  {
    name: 'Bruno M.',
    location: 'Setor Aeroporto, Goiânia',
    text: 'Excelente custo-benefício. O serviço de faxina pós-obra ficou perfeito, removeu toda a poeira fina e resíduos sem riscar nada.',
    rating: 5,
  },
  {
    name: 'Camila T.',
    location: 'Jardim América, Goiânia',
    text: 'Pontualidade britânica e serviço impecável. O cheirinho de limpeza dura dias no apartamento e ela é muito educada.',
    rating: 5,
  },
  {
    name: 'Lucas G.',
    location: 'Setor Coimbra, Goiânia',
    text: 'Trabalho extremamente profissional. A organização dos armários da cozinha superou todas as minhas expectativas.',
    rating: 5,
  },
];
