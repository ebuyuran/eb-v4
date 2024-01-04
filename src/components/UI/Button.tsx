import Link from 'next/link';

interface ButtonProps {
  id?: string;
  label: string;
  link?: {
    url: string;
    target?: '_blank';
  };
}

export function Button(props: ButtonProps) {
  const button = (
    <div className={'relative inline-block'}>
      <div
        className={
          'clipped-tl-br bg-tertiary absolute -z-10 top-[2px] left-1 w-full h-full pointer-events-none'
        }
      />
      <button
        id={props.id}
        name={props.id}
        className={
          '[&+div]:hover:animate-glitch_cleared clipped-tl-br relative px-7 py-2 bg-primary text-black font-semibold cursor-pointer'
        }
      >
        {props.label}
      </button>
      <div
        className={
          'clipped-tl-br invisibility-clip bg-primary text-black font-semibold flex justify-center items-center absolute z-10 top-0 left-0 w-full h-full pointer-events-none [text-shadow:_-12px_-4px_0_#00ffff,_6px_7px_0_#ff003b]'
        }
      >
        {props.label}
      </div>
    </div>
  );

  return props.link ? (
    <Link href={props.link.url} target={props.link.target}>
      {button}
    </Link>
  ) : (
    button
  );
}
