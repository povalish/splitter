import { PropsWithChildren } from 'react';
import { IStyled } from '@ui-kit/types/Styled';
import { ViewProps } from 'react-native';

//
//

export interface IWebScreen extends IStyled, PropsWithChildren {}

export interface INativeScreen extends ViewProps {}
