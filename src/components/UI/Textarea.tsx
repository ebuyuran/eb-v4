interface TextareaProps {
  id?: string;
  placeholder?: string;
}

export function Textarea(props: TextareaProps) {
  const { id, placeholder } = props;
  return (
    <textarea
      className={
        'px-4 py-3 h-36 clipped-tl-br text-white bg-neutral-900 border-b-2 border-neutral-600 focus:border-primary outline-none'
      }
      id={id && id}
      name={id && id}
      placeholder={placeholder && placeholder}
    />
  );
}
