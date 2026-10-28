import type { Metadata } from 'next';
import { Cinzel, Inter } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Royals Kingdom',
  description: 'Premium multi-mega hub e-commerce platform with royal heritage elegance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${inter.variable} font-body bg-royal-burgundy text-royal-ivory antialiased`}>
        {children}
      </body>
    </html>
  );
}
