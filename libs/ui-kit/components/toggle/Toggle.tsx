import React, { useId } from 'react';
import { IWebToggle } from './Toggle.interface';
import {
  container,
  title,
  input,
  toggleArea,
  toggleThumb,
  checkedTip,
  uncheckedTip,
} from './Toggle.classes';

//
//

export const Toggle: React.FC<IWebToggle> = ({ label, className, ...inputProps }) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={container({ className })}
      tabIndex={0}
      data-testid='toggle-input'
    >
      <span className={title()}>{label}</span>

      <input id={id} type='checkbox' className={input()} {...inputProps} />

      <div className={toggleArea()} />
      <span className={checkedTip()}>On</span>
      <div className={toggleThumb()} />
      <span className={uncheckedTip()}>Off</span>
    </label>
  );
};
