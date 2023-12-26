import Link from 'next/link';
import { MobileNavigation } from './MobileNavigation';

export function Navigation() {
  return (
    <>
      <MobileNavigation />
      <div className={'fixed top-[2px] container'}>
        <ul
          className={
            'hidden md:flex flex-row justify-end text-black font-semibold [&>li]:mx-3 [&>li]:bg-clipped-yellow-bl [&>li>a]:px-4'
          }
        >
          <li>
            <Link href={'/'}>HOME</Link>
          </li>
          <li>
            <Link href={'/about'}>ABOUT</Link>
          </li>
          <li>
            <Link href={'/blog'}>BLOG</Link>
          </li>
          <li>
            <Link href={'/resume'}>RESUME</Link>
          </li>
          <li>
            <Link href={'https://twitter.com/efebuyuran'} target={'_blank'}>
              X
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
