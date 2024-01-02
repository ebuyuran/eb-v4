'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Modal } from '@/components/Modal/Modal';

interface ModalProviderProps {
  children: React.ReactNode;
}

type ModalTypes = 'image' | 'contact-form';

type ModalOptions = {
  type: ModalTypes;
  payload?: any;
};

export type ModalStates = false | ModalOptions;

interface ModalContextType {
  modalState: ModalStates;
  setModalState: Dispatch<SetStateAction<ModalStates>>;
}

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType,
);

export function ModalProvider(props: ModalProviderProps) {
  const [state, setState] = useState<ModalStates>(false);

  return (
    <ModalContext.Provider
      value={{ modalState: state, setModalState: setState }}
    >
      {state && <Modal />}
      {props.children}
    </ModalContext.Provider>
  );
}
