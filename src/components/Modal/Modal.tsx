'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { ModalContext } from '@/providers/ModalProvider';
import { ContactForm } from './ContactForm';

export function Modal() {
  const context = useContext(ModalContext);

  if (context.modalState) {
    switch (context.modalState.type) {
      case 'image':
        return (
          <div
            className={`fixed z-50 flex justify-center items-center w-screen h-screen bg-black/80 p-6`}
          >
            <div className={'relative w-4/5 max-w-6xl'}>
              <div
                onClick={() => context.setModalState(false)}
                className={'absolute -top-10 right-0 cursor-pointer'}
              >
                <svg
                  xmlns={'http://www.w3.org/2000/svg'}
                  fill={'none'}
                  viewBox={'0 0 24 24'}
                  strokeWidth={1.5}
                  stroke={'currentColor'}
                  className={'w-8 h-8 stroke-primary'}
                >
                  <path
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                    d={'M6 18 18 6M6 6l12 12'}
                  />
                </svg>
              </div>
              <Image
                src={context.modalState.payload}
                width={200}
                height={200}
                alt={'Modal Image'}
                className={
                  'w-full aspect-auto border border-primary p-2 bg-black'
                }
              />
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
