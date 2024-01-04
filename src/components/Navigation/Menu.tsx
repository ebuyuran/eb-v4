'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { navigation_data, NavigationData } from '@/data/navigation';
import { ModalContext } from '@/providers/ModalProvider';

interface MenuProps {
  collapseMenu?: () => void;
}

export function Menu(props: MenuProps) {
  const router = useRouter();
  const context = useContext(ModalContext);

  const clickHandler = (navigationItem: NavigationData) => {
    if (navigationItem.action) {
      context.setModalState({ type: 'contact-form' });
    } else {
      if (navigationItem.newTab) {
        window.open(navigationItem.link, '_ blank');
      } else {
        router.push(navigationItem.link);
      }
    }

    if (props.collapseMenu) props.collapseMenu();
  };

  return navigation_data.map((nav, i) => {
    return (
      <li
        key={nav.label}
        className={
          'cursor-pointer md:relative md:mx-3 md:bg-clipped-yellow-bl md:before:block md:before:bg-tertiary md:before:absolute md:before:-z-10 md:before:top-0 md:before:-right-1 md:before:w-3/4 md:before:h-[calc(100%+3px)]'
        }
        onClick={clickHandler.bind(null, nav)}
      >
        <div className={'relative'}>
          <div
            className={
              'bg-primary py-1 px-4 animate-glitch_nav md:py-0 md:animate-none md:bg-transparent'
            }
            style={{
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {nav.label}
          </div>
          <div
            className={
              'py-1 px-4 absolute top-0 left-0 -z-10 pointer-events-none md:hidden'
            }
          >
            {nav.label}
          </div>
        </div>
      </li>
    );
  });
}
