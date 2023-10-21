import { InputHTMLAttributes } from 'react';
import { TextInputProps } from 'react-native';

export interface IToggle {
  label: string;
}

export interface IWebToggle extends InputHTMLAttributes<HTMLInputElement>, IToggle {}

export interface INativeToggle extends TextInputProps {}
