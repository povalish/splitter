import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { Periods as PeriodsComponent } from './Periods';
import { Periods } from '@modules/timer/types/Periods';

//
//

describe('TIMER MODULES - VIEWS - Periods component', () => {
  it('should render successfully', () => {
    const component = render(
      <PeriodsComponent active={Periods.Focusing} onChange={() => undefined} />,
    );
    expect(component).toMatchSnapshot();
  });

  it('should call onChange with new period value', () => {
    const onChange = jest.fn();
    render(<PeriodsComponent active={Periods.Focusing} onChange={onChange} />);

    fireEvent.press(screen.getByText(/focusing/i));
    expect(onChange).toBeCalledWith(Periods.Focusing);

    fireEvent.press(screen.getByText(/short break/i));
    expect(onChange).toBeCalledWith(Periods.ShortBreak);

    fireEvent.press(screen.getByText(/long break/i));
    expect(onChange).toBeCalledWith(Periods.LognBreak);
  });
});
