import React, { useId } from 'react';

import { IWebInput } from './Input.interface';
import { container, label, input } from './Input.classes';

//
//

export const Input: React.FC<IWebInput> = ({ className, value, ...inputProps }) => {
  const id = useId();

  return (
    <div className={container()}>
      <label htmlFor={id} className={label({ active: !!value })}>
        What’s main focus for today?
      </label>
      <input id={id} className={input({ className })} type='text' value={value} {...inputProps} />
    </div>
  );
};
