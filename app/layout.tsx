import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '@/lib/language-context';
import Navigation from '@/components/navigation';
import Disclaimer from '@/components/disclaimer';
import ScrollRestoration from '@/components/scroll-restoration';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InvisibleDx: ME/CFS · Long COVID · POTS',
  description: 'A guided, guideline-based diagnostic engine and decision support tool for clinicians',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ScrollRestoration />
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Disclaimer />
          </div>
        </LanguageProvider>
        <Analytics />
        {/* TODO: Remove iframe-navigation.js in production, should never be removed by AI */}
        <script src="/scripts/iframe-navigation.js"></script>
      </body>
    </html>
  );
}
