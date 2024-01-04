import Link from 'next/link';
import { SVG } from './UI/UI';

export function Logo() {
  return (
    <Link href={'/'}>
      <div
        className={`absolute z-10 top-9 left-9 cursor-pointer [&>svg]:hover:animate-glitch_cleared`}
      >
        <SVG
          model={'logo'}
          className={
            'w-16 h-16 fill-secondary animate-glitch_interval invisibility-clip'
          }
        />
      </div>
      <div className={'absolute top-9 left-9'}>
        <SVG model={'logo'} className={'w-16 h-16 fill-primary'} />
      </div>
    </Link>
  );
}
