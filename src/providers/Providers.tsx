import { ModalProvider } from './ModalProvider';

interface ProviderProps {
  children: React.ReactNode;
}

export function Providers(props: ProviderProps) {
  return <ModalProvider>{props.children}</ModalProvider>;
}
