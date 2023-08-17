import { cva } from 'class-variance-authority';

//
//

export const textClasses = cva(
  `
  text-[20px] text-colorText font-bold
  md:text-[24px]
  transition-all
  active:scale-95
  hover:scale-105
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
  focus:text-colorAccent focus:opacity-100 focus:text-shadow focus:outline-none
`,
  {
    variants: {
      active: {
        true: 'opacity-100',
        false: 'opacity-50',
      },
    },
  },
);
