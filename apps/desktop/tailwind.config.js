const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

//
//

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      boxShadow: {
        focus: '0px 0px 16.5px 0px #458588',
      },
    },
  },
  plugins: [],
  presets: [require('../../tailwind.theme')],
};
