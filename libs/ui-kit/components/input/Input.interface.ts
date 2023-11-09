import { InputHTMLAttributes } from 'react';
import { TextInputProps } from 'react-native';

export interface IInput {
  label: string;
}

export interface IWebInput extends InputHTMLAttributes<HTMLInputElement>, IInput {}

export interface INativeInput extends TextInputProps {}
