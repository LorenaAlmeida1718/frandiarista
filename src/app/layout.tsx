import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';

const title = 'Diarista em Goiânia | Fran Diarista | Limpeza Profissional e Faxina';
const description = 'Serviço de diarista profissional em Goiânia. Faxina residencial e comercial com a confiança que você precisa. Peça seu orçamento de diarista em Goiânia, valor justo e qualidade.';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ['Diarista em Goiânia', 'diarista goiania', 'faxineira goiania', 'diarista faxina goiania', 'Serviço de diarista em Goiânia', 'diarista goiania valor', 'limpeza profissional goiania'],
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    locale: 'pt_BR',
    url: 'https://fran-diarista-goiania.web.app', // Placeholder URL
    siteName: 'Fran Diarista Goiânia',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2355C5B9'><path d='M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z'/></svg>",
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
  "url": "https://fran-diarista-goiania.web.app", // Placeholder URL
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
