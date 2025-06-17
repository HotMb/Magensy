import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Magensy - Agence Web & Visibilité Digitale',
  description: 'Magensy est votre partenaire pour créer des sites web modernes et booster votre visibilité en ligne. Services de création web, SEO, e-commerce et marketing digital.',
  keywords: 'agence web, création site internet, SEO, référencement, e-commerce, marketing digital, visibilité en ligne',
  authors: [{ name: 'Magensy Agency' }],
  creator: 'Magensy',
  publisher: 'Magensy',
  openGraph: {
    title: 'Magensy - Agence Web & Visibilité Digitale',
    description: 'Donnez vie à votre présence digitale avec Magensy',
    url: 'https://magensy.com',
    siteName: 'Magensy',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magensy - Agence Web & Visibilité Digitale',
    description: 'Donnez vie à votre présence digitale avec Magensy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}