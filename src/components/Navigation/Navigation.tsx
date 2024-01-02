import Link from 'next/link';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import { Menu } from './Menu';

export function Navigation() {
  return (
    <>
      <MobileNavigation />
      <div className={'fixed z-40 top-[2px] container'}>
        <ul
          className={
            'hidden md:flex flex-row justify-end text-black font-semibold'
          }
        >
          <Menu
            className={
              'relative mx-3 bg-clipped-yellow-bl px-4 before:block cursor-pointer before:bg-tertiary before:absolute before:-z-10 before:top-0 before:-right-1 before:w-3/4 before:h-[calc(100%+3px)]'
            }
          />
        </ul>
      </div>
    </>
  );
}
