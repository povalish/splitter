import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

//
//

describe('Toggle component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Toggle label='Toggle' />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    render(<Toggle label='Toggle' checked={false} onChange={(e) => onChange(e.target.checked)} />);

    fireEvent.click(screen.getByTestId('toggle-input'));
    expect(onChange).toBeCalledWith(true);
  });
});
