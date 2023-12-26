import type { Metadata } from 'next';
import { Logo } from '@/components/Logo/Logo';
import { Providers } from '@/providers/Providers';
import { Navigation } from '@/components/Navigation/Navigation';
import { rajdhani } from '@/assets/fonts';
import './globals.css';

declare module 'react' {
  interface SVGProps<T> {
    dataslot?: string;
    style?: string;
  }
}

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
      <body
        className={rajdhani.className + ' ' + 'font-medium'}
        style={{ backgroundImage: 'url("/assets/img/bg.jpg")' }}
      >
        <Providers>
          <div className={'fixed z-40 top-0 w-full h-[2px] bg-primary'} />
          <div className={`container relative pt-24`}>
            <Logo />
            <Navigation />
            {props.children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
