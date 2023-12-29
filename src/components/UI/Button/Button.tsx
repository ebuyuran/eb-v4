import Link from 'next/link';
import './Button.css';

interface ButtonProps {
  label: string;
  link?: {
    url: string;
    target?: '_blank';
  };
}

export function Button(props: ButtonProps) {
  const button_element = (
    <button
      data-content={props.label}
      className={`button after:content-[attr(data-content)]`}
    >
      {props.label}
    </button>
  );

  if (props.link) {
    return (
      <Link
        href={props.link.url}
        target={props.link.target ? props.link.target : '_self'}
      >
        {button_element}
      </Link>
    );
  }
  return button_element;
}
