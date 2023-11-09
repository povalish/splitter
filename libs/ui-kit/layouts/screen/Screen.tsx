import React, { PropsWithChildren } from 'react';
import { IStyled } from '@ui-kit/types/Styled';
import { screen } from './Screen.classes';

//
//

interface IScreen extends IStyled, PropsWithChildren {}

export const Screen: React.FC<IScreen> = ({ className, children }) => (
  <div className={screen({ className })}>{children}</div>
);
