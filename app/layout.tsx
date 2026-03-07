import type { Metadata } from 'next';
import { Bebas_Neue, Cormorant_Garamond, DM_Serif_Display, Space_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import FilmGrain from '@/components/FilmGrain';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const cormorant = Cormorant_Garamond({ weight: ['400', '600', '700'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-cormorant' });
const dmSerif = DM_Serif_Display({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-dm-serif' });
const spaceMono = Space_Mono({ weight: ['400', '700'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: 'Onimison | Builder · Fiction Writer · Operator',
  description: 'Designer turned dev. Dev turned writer. Writer turned operator. No clean title.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${cormorant.variable} ${dmSerif.variable} ${spaceMono.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased min-h-screen flex flex-col">
        <FilmGrain />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
