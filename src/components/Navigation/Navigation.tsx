import Link from 'next/link';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import { navigation_data } from '@/data/navigation';

export function Navigation() {
  return (
    <>
      <MobileNavigation />
      <div className={'fixed z-40 top-[2px] container'}>
        <ul
          className={
            'hidden md:flex flex-row justify-end text-black font-semibold [&>li]:mx-3 [&>li]:bg-clipped-yellow-bl [&>li>a]:px-4'
          }
        >
          {navigation_data.map((nav) => (
            <li
              key={nav.label}
              className={
                'relative before:block before:bg-tertiary before:absolute before:-z-10 before:top-0 before:-right-1 before:w-3/4 before:h-[calc(100%+3px)]'
              }
            >
              <Link href={nav.link} target={nav.newTab ? '_blank' : '_self'}>
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
