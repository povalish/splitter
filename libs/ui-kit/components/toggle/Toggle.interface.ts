import { InputHTMLAttributes } from 'react';

export interface IToggle {
  label: string;
}

export interface IWebToggle extends InputHTMLAttributes<HTMLInputElement>, IToggle {}

export interface INativeToggle extends IToggle {
  value?: boolean;
  onChange?: (newValue: boolean) => void;
  className?: string;
}
