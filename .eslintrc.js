module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
      },
    ],
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'always', children: 'never', propElementValues: 'always' },
    ],
  },
};
