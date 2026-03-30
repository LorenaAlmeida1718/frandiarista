import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';

const title = 'Diarista e Faxina em Goiânia | Fran Diarista';
const description = 'Serviço profissional de diarista e faxina em Goiânia para residências e comércios. Confiança, qualidade e preço justo. Solicite seu orçamento!';

export const metadata: Metadata = {
  title: title,
  description: description,
  verification: {
    google: "zVtwxhd7RqHsEwPugqfk_jthFkUuBhmWyBCmGo8PWqc",
  },
  keywords: ['Diarista em Goiânia', 'diarista goiania', 'faxineira goiania'],
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frandiarista.com.br',
    siteName: 'Fran Diarista',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💧</text></svg>",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fran Diarista",
  "description": "Serviços de diarista e limpeza profissional em Goiânia. Faxina residencial e comercial. Confiança e profissionalismo para seu lar ou empresa.",
  "telephone": "+5562996678388",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Goiânia",
    "addressRegion": "GO",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -16.686891,
    "longitude": -49.264794
  },
  "url": "https://frandiarista.online",
  "serviceArea": [
    {
      "@type": "City",
      "name": "Goiânia"
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <div className="flex min-h-dvh flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
