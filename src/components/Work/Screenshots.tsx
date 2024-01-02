'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { ModalContext } from '@/providers/ModalProvider';

interface ScreenshotsProps {
  list: string[];
}

export function Screenshots(props: ScreenshotsProps) {
  const context = useContext(ModalContext);

  return props.list.map((screenshot, i) => (
    <li
      onClick={() =>
        context.setModalState({ type: 'image', payload: screenshot })
      }
      className={
        'sm:w-[calc(50%-.5rem)] md:w-[calc(33.3%-0.66rem)] p-2 border border-primary cursor-pointer'
      }
      key={i}
    >
      <Image
        src={screenshot}
        width={200}
        height={200}
        alt={'Riot Games Screenshot' + ' ' + i}
        className={'w-full h-auto'}
      />
    </li>
  ));
}
