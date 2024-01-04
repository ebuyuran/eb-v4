import type { Config } from 'tailwindcss';
import {
  glitchAnimation,
  glitchClips,
  glitchInterval,
} from './src/styles/animations/glitch';

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
      animation: {
        glitch: '1s steps(5, end) 0s 1 normal both running glitch',
        glitch_short: '.5s steps(5, end) 0s 1 normal both running glitch',
        glitch_nav: '.75s glitch',
        glitch_cleared:
          '1s steps(5, end) 0s 1 normal both running glitch_cleared',
        glitch_interval:
          '10s steps(5, end) 0s infinite normal both running glitch_interval',
      },
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
      keyframes: {
        glitch: {
          ...glitchAnimation,
          '100%': {
            clipPath: 'none',
            transform: 'translate(0)',
          },
        },
        glitch_cleared: {
          ...glitchAnimation,
          '100%': {
            clipPath: glitchClips[0],
            transform: 'translate(0)',
          },
        },
        glitch_interval: glitchInterval,
      },
    },
  },
  plugins: [],
};
export default config;
