import { cva } from 'class-variance-authority';

export const container = cva(`
  relative
  hover:cursor-pointer
  group
  focus:outline-none
`);

export const input = cva(`sr-only peer`);

export const title = cva(`text-colorText text-sm mb-2 group-focus-within:text-colorAccent`);

export const toggleArea = cva(
  `
  w-[85px] h-[40px] rounded-[54px] py-2 px-3
  bg-colorBackgroundContrast
  flex items-center justify-between
  group-focus-within:border-[3px] group-focus-within:border-colorAccent 
  group-focus-within:shadow-focus
`,
);

export const toggleThumb = cva(
  `
  w-[28px] h-[28px] rounded-full
  absolute
  bottom-[6px] left-[8px] bg-colorDisabled
  peer-checked:translate-x-10 peer-checked:bg-colorSuccess
  transition-all
`,
  {
    variants: {
      checked: {
        true: 'translate-x-10 bg-colorSuccess',
        false: '',
      },
    },
  },
);

export const checkedTip = cva(
  `
  text-sm font-bold
  transition-all
  absolute bottom-2.5 left-3 
  text-colorSuccess
  opacity-0 peer-checked:opacity-100
  select-none
`,
  {
    variants: {
      checked: {
        true: 'opacity-100',
        false: '',
      },
    },
  },
);

export const uncheckedTip = cva(
  `
  text-sm font-bold
  transition-all
  absolute bottom-2.5 right-3 
  text-colorDisabled
  opacity-100 peer-checked:opacity-0
  select-none
`,
  {
    variants: {
      checked: {
        true: 'opacity-0',
        false: '',
      },
    },
  },
);
