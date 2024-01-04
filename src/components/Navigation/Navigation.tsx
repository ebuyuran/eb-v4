import { MobileNavigation } from './MobileNavigation';
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
          <Menu />
        </ul>
      </div>
    </>
  );
}
