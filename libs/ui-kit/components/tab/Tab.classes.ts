import { cva } from 'class-variance-authority';

//
//

export const textClasses = cva(
  `
  text-[20px] text-colorText font-bold whitespace-nowrap
  md:text-[24px]
`,
  {
    variants: {
      active: {
        true: '',
        false: '',
      },
    },
  },
);

export const tabClasses = cva(
  `
  py-2 px-3
  transition-all
  active:scale-[0.96]
  hover:scale-[1.02]
  focus:text-colorAccent focus:opacity-100 focus:text-shadow focus:outline-none
`,
  {
    variants: {
      active: {
        true: 'opacity-100',
        false: 'opacity-50',
        undefined: 'opacity-50',
      },
    },
  },
);
