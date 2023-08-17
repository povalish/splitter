import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

//
//

describe('Button component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Click me!</Button>);
    expect(baseElement).toMatchSnapshot();
  });

  it('should call onClick', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me!</Button>);

    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
