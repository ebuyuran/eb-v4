'use client';

import { useState } from 'react';
import Link from 'next/link';

const defaultClasses = `absolute top-0 right-0 z-40 transition-all flex sm:hidden `;
const passiveClasses = `w-12 h-12 cursor-pointer`;
const activeClasses = `w-screen h-screen px-10 pt-20 pb-6`;

export function Header() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      onClick={setActive.bind(null, !active)}
      className={defaultClasses + (active ? activeClasses : passiveClasses)}
      style={{
        background: active
          ? `url('/assets/img/bg-yellow.jpg')`
          : `linear-gradient(45deg, transparent 10%, var(--primary-colour) 10%)`,
      }}
    >
      {active ? (
        <svg
          xmlns={'http://www.w3.org/2000/svg'}
          fill={'none'}
          viewBox={'0 0 24 24'}
          strokeWidth={1.5}
          stroke={'currentColor'}
          dataslot={'icon'}
          className={`w-9 h-9 stroke-black absolute top-[.6rem] right-[.75rem] cursor-pointer`}
        >
          <path
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            d={`M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25`}
          />
        </svg>
      ) : (
        <svg
          xmlns={'http://www.w3.org/2000/svg'}
          fill={'none'}
          viewBox={'0 0 24 24'}
          strokeWidth={1.5}
          stroke={'none'}
          dataslot={'icon'}
          className={'w-7 h-7 stroke-black absolute top-[.6rem] right-[.6rem]'}
        >
          <path
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            d={'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'}
          />
        </svg>
      )}
      <ul
        className={
          `navigation ${!active && 'hidden'}` +
          ' text-black text-xl font-bold [&>li]:my-3'
        }
      >
        <li>
          <Link href={'/'} className={`after:content-['HOME']`}>
            HOME
          </Link>
        </li>
        <li>
          <Link href={'/'} className={`after:content-['ABOUT']`}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link href={'/'} className={`after:content-['RESUME']`}>
            RESUME
          </Link>
        </li>
        <li>
          <Link href={'/'} className={`after:content-['X']`}>
            X
          </Link>
        </li>
      </ul>
    </div>
  );
}
