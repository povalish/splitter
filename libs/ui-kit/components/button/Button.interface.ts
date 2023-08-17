/// <reference types="nativewind/types" />
/// <reference types="next" />

import { ButtonHTMLAttributes } from 'react';
import { TouchableOpacityProps } from 'react-native';

// Button types
//

type ButtonVariant = 'success' | 'danger' | 'danger-text' | 'disabled';

export interface IButton {
  variant?: ButtonVariant;
}

export interface IWebButton extends IButton, ButtonHTMLAttributes<HTMLButtonElement> {}

export interface INativeButton extends IButton, TouchableOpacityProps {}
