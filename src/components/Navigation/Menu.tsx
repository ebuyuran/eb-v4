'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { navigation_data } from '@/data/navigation';
import { ModalContext } from '@/providers/ModalProvider';

interface MenuProps {
  className: string;
}

export function Menu(props: MenuProps) {
  const context = useContext(ModalContext);

  return navigation_data.map((nav) => {
    if (!nav.action) {
      return (
        <li
          key={nav.label}
          data-content={nav.label}
          className={props.className}
        >
          <Link href={nav.link} target={nav.newTab ? '_blank' : '_self'}>
            {nav.label}
          </Link>
        </li>
      );
    } else {
      switch (nav.action) {
        case 'contact-form':
          return (
            <li
              key={nav.label}
              data-content={nav.label}
              className={props.className}
              onClick={() => context.setModalState({ type: 'contact-form' })}
            >
              {nav.label}
            </li>
          );
      }
    }
  });
}
