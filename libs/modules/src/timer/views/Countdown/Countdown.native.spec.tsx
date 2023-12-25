import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Countdown } from './Countdown';

//
//

describe('TIMER MODULES - VIEWS - Countdown component', () => {
  it('should render successfully', () => {
    const component = render(<Countdown seconds={120} />);
    expect(component).toMatchSnapshot();
  });

  it('should format seconds', () => {
    render(<Countdown seconds={120} />);
    expect(screen.getByText('02:00'));
  });
});
