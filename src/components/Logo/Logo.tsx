import Link from 'next/link';
import { LogoSVG } from './LogoSVG';
import './Logo.css';

export function Logo() {
  return (
    <>
      <div className={`absolute z-10 top-9 left-9 logo-glitch cursor-pointer`}>
        <Link href={'/'}>
          <LogoSVG className={'fill-primary'} />
        </Link>
      </div>
      <div className={'absolute top-9 left-9'}>
        <LogoSVG className={'fill-secondary'} />
      </div>
    </>
  );
}
