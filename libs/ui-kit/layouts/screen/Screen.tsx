import React from 'react';
import { screen } from './Screen.classes';
import { IWebScreen } from './Screen.interface';

//
//

export const Screen: React.FC<IWebScreen> = ({ className, children }) => (
  <div className={screen({ className })}>{children}</div>
);
