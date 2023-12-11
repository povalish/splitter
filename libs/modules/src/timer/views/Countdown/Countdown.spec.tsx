import React from 'react';
import { render, screen } from '@testing-library/react';
import { Countdown } from './Countdown';

//
//

describe('TIMER MODULES - VIEWS - Countdown component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Countdown seconds={120} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should format seconds', () => {
    render(<Countdown seconds={120} />);
    expect(screen.getByText('02:00'));
  });
});
