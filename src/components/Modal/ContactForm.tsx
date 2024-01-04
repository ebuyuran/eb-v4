import { useContext } from 'react';
import { ModalContext } from '@/providers/ModalProvider';

import { Button, Input, SVG, Textarea } from '../UI/UI';

export function ContactForm() {
  const context = useContext(ModalContext);

  return (
    <div className={'flex flex-col items-end animate-glitch'}>
      <div
        className={`relative -right-4 p-4 cursor-pointer`}
        onClick={() => context.setModalState(false)}
      >
        <SVG model={'X'} className={'w-8 h-8 stroke-primary'} />
      </div>
      <div className={'relative p-6 bg-primary clipped-tl-br clip-16'}>
        <div
          className={`clipped-tl-br clip-16 absolute -z-10 top-[2px] left-[2px] bg-black w-[calc(100%-4px)] h-[calc(100%-4px)]`}
        />
        <form
          action={'https://submit-form.com/ZP7x4NwS5'}
          className={'flex flex-col w-80'}
        >
          <Input type={'text'} id={'name'} placeholder={'Your name'} />
          <div className={'my-2'} />
          <Input type={'email'} id={'email'} placeholder={'Your email'} />
          <div className={'my-2'} />
          <Textarea id={'message'} placeholder={'Your message...'} />
          <div className={'mt-8'} />
          <div className={'flex justify-end'}>
            <Button id={'submit'} label={'SEND'} />
          </div>
        </form>
      </div>
    </div>
  );
}
