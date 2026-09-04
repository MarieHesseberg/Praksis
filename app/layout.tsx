import type { Metadata } from 'next';
import { DM_Sans, Libre_Baskerville } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Libre_Baskerville({ variable: '--font-serif', subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Praksislogg · EasyFisk',
  description: 'Arbeidslogg for praksisprosjektet EasyFisk – en mobilprototype for fiske i Mandalselva.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="no"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
