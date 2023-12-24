import { cva } from 'class-variance-authority';

export const textClasses = cva('text-center font-bold', {
  variants: {
    variant: {
      success: 'text-colorTextContrast',
      danger: 'text-colorTextContrast',
      'danger-text': `
        text-colorDanger
        disabled:text-colorDisabled
      `,
      disabled: '',
    },
  },
});

export const buttonClasses = cva(
  `
  py-2 px-3 min-w-[100px]
  border-[3px] rounded-lg border-red 
  transition-all
  active:scale-[0.97]
  hover:scale-[1,02]
  disabled:bg-colorDisabled disabled:border-colorDisabled disabled:scale-100 disabled:cursor-not-allowed
  focus:border-[3px] focus:border-colorAccent focus:scale-105 focus:shadow-focus focus:outline-none
`,
  {
    variants: {
      variant: {
        success: `
          border-colorSuccess bg-colorSuccess 
          hover:bg-colorSuccessHover 
          active:bg-colorSuccessPressed
        `,
        danger: `
          border-colorDanger bg-colorDanger 
          hover:bg-colorDangerHover 
          active:bg-colorDangerPressed
        `,
        'danger-text': `
          border-transparent bg-transparent
          disabled:bg-transparent disabled:border-transparent
          focus:border-colorAccent
        `,
        disabled: `
          bg-colorDisabled border-colorDisabled 
        `,
      },
      defaultVariants: {
        variant: 'success',
      },
    },
  },
);
