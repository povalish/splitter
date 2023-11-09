import React, { useId } from 'react';

import { IWebInput } from './Input.interface';
import { container, label as labelStyles, input } from './Input.classes';

//
//

export const Input: React.FC<IWebInput> = ({ className, value, label, ...inputProps }) => {
  const id = useId();

  return (
    <div className={container({ className })}>
      <label htmlFor={id} className={labelStyles({ active: !!value })}>
        {label}
      </label>
      <input id={id} className={input()} type='text' value={value} {...inputProps} />
    </div>
  );
};
