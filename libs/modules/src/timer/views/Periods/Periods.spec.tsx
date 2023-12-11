import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Periods as PeriodsComponent } from './Periods';
import { Periods } from '@modules/timer/types/Periods';

//
//

describe('TIMER MODULES - VIEWS - Periods component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PeriodsComponent active={Periods.Focusing} onChange={() => undefined} />,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should call onChange with new period value', () => {
    const onChange = jest.fn();
    render(<PeriodsComponent active={Periods.Focusing} onChange={onChange} />);

    fireEvent.click(screen.getByText(/focusing/i));
    expect(onChange).toBeCalledWith(Periods.Focusing);

    fireEvent.click(screen.getByText(/short break/i));
    expect(onChange).toBeCalledWith(Periods.ShortBreak);

    fireEvent.click(screen.getByText(/long break/i));
    expect(onChange).toBeCalledWith(Periods.LognBreak);
  });
});
