/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const plugin = require('tailwindcss/plugin');

//
//

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        colorBackground: '#282828',
        colorBackgroundContrast: '#3C3836',
        colorSuccess: '#B8BB26',
        colorSuccessPressed: '#888A19',
        colorSuccessHover: '#D5D84F',
        colorText: '#EBDBB2',
        colorTextContrast: '#282828',
        colorTextContrastDisable: '#282828',
        colorDisabled: '#C5BAAB',
        colorDanger: '#FB4934',
        colorDangerPressed: '#A63629',
        colorDangerHover: '#FF6A58',
        colorAccent: '#458588',
        colorPeriodFocusing: '#282828',
        colorPeriodShortBreak: '#254A4B',
        colorPeriodLongBreak: '#173C51',
      },
    },
    textShadow: {
      DEFAULT: '0px 0px 16.5px #458588',
    },
  },
  plugins: [
    // https://www.kindacode.com/snippet/text-shadows-in-tailwind-css/
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
