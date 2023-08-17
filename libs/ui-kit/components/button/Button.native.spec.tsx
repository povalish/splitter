import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Button } from './Button.native';

//
//

describe('Button component', () => {
  it('should render successfully', () => {
    const root = render(<Button>Click me!</Button>);
    expect(root).toMatchSnapshot();
  });

  it('should call onPress', () => {
    const handleClick = jest.fn();
    render(<Button onPress={handleClick}>Click me!</Button>);

    fireEvent.press(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
