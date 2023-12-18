import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Efe Buyuran | Sn. Front-End Developer',
  description: 'Personal website of Efe Buyuran.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang={'en'}>
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}
