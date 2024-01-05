'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { ModalContext } from '@/providers/ModalProvider';
import { SVG } from '../UI/UI';
import { ContactForm } from './ContactForm';

export function Modal() {
  const context = useContext(ModalContext);

  if (context.modalState) {
    switch (context.modalState.type) {
      case 'image':
        return (
          <div
            onClick={() => context.setModalState(false)}
            className={`fixed z-50 flex justify-center items-center w-screen h-screen bg-black/80 md:p-6`}
          >
            <div className={'relative w-[calc(100%-10px)] max-w-6xl md:w-4/5'}>
              <div
                className={
                  'flex justify-center items-center bg-primary absolute w-12 h-8 -top-7 right-0 clipped-tr cursor-pointer'
                }
              >
                <SVG model={'X'} className={'w-5 h-5 stroke-black'} />
              </div>
              <Image
                src={context.modalState.payload}
                width={200}
                height={200}
                alt={'Modal Image'}
                className={'w-full aspect-auto border border-primary bg-black'}
              />
              <Image
                src={context.modalState.payload}
                width={200}
                height={200}
                alt={'Modal Image'}
                className={
                  'animate-glitch_short w-full aspect-auto border border-primary bg-black absolute top-0 left-0'
                }
              />
              <div className={'divider dv-inverted'} />
            </div>
          </div>
        );

      case 'contact-form':
        return (
          <div
            className={`fixed z-50 flex justify-center items-center w-screen h-screen bg-black/80 p-6`}
          >
            <ContactForm />
          </div>
        );
    }
  }
}
