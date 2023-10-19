import { InputHTMLAttributes } from 'react';
import { TextInputProps } from 'react-native';

export interface IInput {}

export interface IWebInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface INativeInput extends TextInputProps {}
