import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '984px',
        '2xl': '984px',
      },
    },
    extend: {
      backgroundImage: {
        'clipped-yellow-tr':
          'linear-gradient(45deg, rgba(255,229,0,1) 95%, rgba(255,229,0,0) 95%)',
        'clipped-yellow-bl':
          'linear-gradient(225deg, rgba(255,229,0,1) 90%, rgba(255,229,0,0) 90%)',
      },
      colors: {
        primary: '#ffe500',
        secondary: '#00ffff',
        tertiary: '#ff003b',
      },
    },
  },
  plugins: [],
};
export default config;
