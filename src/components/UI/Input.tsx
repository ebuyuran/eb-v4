interface InputProps {
  id?: string;
  placeholder?: string;
  type: 'text' | 'email';
}

export function Input(props: InputProps) {
  const { id, placeholder, type } = props;
  return (
    <input
      id={id && id}
      className={
        'clipped-tl-br px-4 py-3 text-white bg-neutral-900 border-b-2 border-neutral-600 focus:border-primary outline-none'
      }
      name={id && id}
      placeholder={placeholder && placeholder}
      type={type}
    />
  );
}
