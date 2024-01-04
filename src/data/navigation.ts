export interface NavigationData {
  action?: 'contact-form';
  label: string;
  link: string;
  newTab: boolean;
}

export const navigation_data: NavigationData[] = [
  {
    label: 'HOME',
    link: '/',
    newTab: false,
  },
  {
    label: 'ABOUT',
    link: '/about',
    newTab: false,
  },
  {
    label: 'BLOG',
    link: '/blog',
    newTab: false,
  },
  {
    label: 'RESUME',
    link: '/resume',
    newTab: false,
  },
  {
    action: 'contact-form',
    label: 'CONTACT',
    link: '',
    newTab: false,
  },
  {
    label: 'X',
    link: 'https://twitter.com/efebuyuran',
    newTab: true,
  },
];
