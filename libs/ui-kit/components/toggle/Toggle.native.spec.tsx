import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Toggle } from './Toggle.native';

//
//

describe('Toggle component', () => {
  it('should render successfully', () => {
    const root = render(<Toggle label='Toggle' />);
    expect(root).toMatchSnapshot();
  });

  it('should change value', () => {
    const handleChange = jest.fn();
    render(<Toggle label='Toggle' onChange={handleChange} value={false} />);

    fireEvent.press(screen.getByTestId('native-toggle'));
    expect(handleChange).toBeCalledWith(true);
  });
});
