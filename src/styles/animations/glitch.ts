export const glitchClips = [
  'inset(50% 50% 50% 50%)',
  'inset(80% -6px 0 0)',
  'inset(50% -6px 30% 0)',
  'inset(10% -6px 85% 0)',
  'inset(40% -6px 43% 0)',
  'inset(80% -6px 50% 0)',
];

export const glitchAnimation = {
  '0%': {
    clipPath: glitchClips[1],
    transform: 'translate(-20px, -10px)',
  },
  '10%': {
    clipPath: glitchClips[3],
    transform: 'translate(10px, 10px)',
  },
  '20%': {
    clipPath: glitchClips[1],
    transform: 'translate(-10px, 10px)',
  },
  '30%': {
    clipPath: glitchClips[3],
    transform: 'translate(0, 5px)',
  },
  '40%': {
    clipPath: glitchClips[2],
    transform: 'translate(-5px, 0)',
  },
  '50%': {
    clipPath: glitchClips[3],
    transform: 'translate(5px, 0)',
  },
  '60%': {
    clipPath: glitchClips[4],
    transform: 'translate(5px, 10px)',
  },
  '70%': {
    clipPath: glitchClips[2],
    transform: 'translate(-10px, 10px)',
  },
  '80%': {
    clipPath: glitchClips[5],
    transform: 'translate(20px, -10px)',
  },
  '90%': {
    clipPath: glitchClips[1],
    transform: 'translate(-10px, 0)',
  },
};

export const glitchInterval = {
  '0%, 89%': {
    clipPath: glitchClips[0],
    transform: 'translate(0, 0)',
  },
  '90%': {
    clipPath: glitchClips[1],
    transform: 'translate(-20px, -10px)',
  },
  '91%': {
    clipPath: glitchClips[3],
    transform: 'translate(10px, 10px)',
  },
  '92%': {
    clipPath: glitchClips[1],
    transform: 'translate(-10px, 10px)',
  },
  '93%': {
    clipPath: glitchClips[3],
    transform: 'translate(0, 5px)',
  },
  '94%': {
    clipPath: glitchClips[2],
    transform: 'translate(-5px, 0)',
  },
  '95%': {
    clipPath: glitchClips[3],
    transform: 'translate(5px, 0)',
  },
  '96%': {
    clipPath: glitchClips[4],
    transform: 'translate(5px, 10px)',
  },
  '97%': {
    clipPath: glitchClips[2],
    transform: 'translate(-10px, 10px)',
  },
  '98%': {
    clipPath: glitchClips[5],
    transform: 'translate(20px, -10px)',
  },
  '99%': {
    clipPath: glitchClips[1],
    transform: 'translate(-10px, 0)',
  },
  '100%': {
    clipPath: glitchClips[0],
    transform: 'translate(0, 0)',
  },
};
