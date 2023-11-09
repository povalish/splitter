import { cva } from 'class-variance-authority';

export const container = cva('relative pt-3 group');

export const label = cva(
  `
  absolute 
  text-colorText whitespace-nowrap 

  group-focus-within:text-colorAccent
  group-focus-within:top-[-5px] group-focus-within:left-0 
  group-focus-within:text-sm group-focus-within:font-normal

  transition-all 
  pointer-events-none
`,
  {
    variants: {
      active: {
        true: 'top-[-5px] left-0 text-sm',
        false: 'top-[20px] left-3 text-base font-bold',
      },
    },
    defaultVariants: {
      active: true,
    },
  },
);

export const input = cva(`
  w-full
  bg-transparent px-3 py-2 
  border-b-[3px] border-b-colorText
  text-colorText text-base font-bold

  disabled:bg-colorDisabled disabled:border-colorDisabled disabled:scale-100 disabled:cursor-not-allowed
  focus:border-b-[3px] focus:border-colorAccent focus:outline-none

  transition-all
`);
