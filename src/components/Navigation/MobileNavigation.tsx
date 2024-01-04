'use client';

import { useState } from 'react';
import { Menu } from './Menu';
import { SVG } from '@/components/UI/UI';

const defaultClasses = `fixed top-0 right-0 z-40 transition-all flex md:hidden `;
const passiveClasses = `w-12 h-12 cursor-pointer`;
const activeClasses = `w-screen h-screen px-10 pt-20 pb-6`;

export function MobileNavigation() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={defaultClasses + (active ? activeClasses : passiveClasses)}
      style={{
        background: active
          ? `url('/assets/img/bg-yellow.jpg')`
          : `linear-gradient(45deg, transparent 10%, var(--primary-colour) 10%)`,
      }}
    >
      {active ? (
        <div onClick={setActive.bind(null, false)}>
          <SVG
            model={'inward-X'}
            className={
              'w-9 h-9 stroke-black absolute top-[.6rem] right-[.75rem] cursor-pointer'
            }
          />
        </div>
      ) : (
        <div className={'w-12 h-12'} onClick={setActive.bind(null, true)}>
          <SVG
            model={'hamburger'}
            className={
              'w-7 h-7 stroke-black absolute top-[.6rem] right-[.6rem]'
            }
          />
        </div>
      )}
      <ul
        className={`${
          !active && 'hidden'
        } text-black text-xl font-bold [&>li]:my-3`}
      >
        <Menu collapseMenu={setActive.bind(null, false)} />
      </ul>
    </div>
  );
}
