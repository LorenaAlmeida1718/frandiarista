import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';

const title = 'Fran Diarista em Goiânia | Limpeza Profissional com Confiança';
const description = 'Serviço de diarista e faxineira em Goiânia para limpeza residencial, comercial e pós-obra. Confiança, qualidade e pontualidade nos Setores Bueno, Marista, Jardim Goiás e Oeste.';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ['Diarista em Goiânia', 'Faxineira Goiânia', 'Serviço de limpeza Goiânia', 'Limpeza pós obra Goiânia'],
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    locale: 'pt_BR',
    url: 'https://fran-diarista-goiania.web.app', // Placeholder URL
    siteName: 'Fran Diarista',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fran Diarista",
  "description": "Serviços de diarista e limpeza profissional em Goiânia com confiança e capricho. Atendemos limpeza residencial, comercial e pós-obra.",
  "telephone": "+5562999999999", // Placeholder phone number
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
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
