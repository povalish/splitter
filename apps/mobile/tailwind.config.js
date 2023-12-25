const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

//
//

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/{app,screens,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind.theme')],
};
