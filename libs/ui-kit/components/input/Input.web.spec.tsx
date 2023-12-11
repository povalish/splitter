import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Input } from './Input';

//
//

describe('Input component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Input label='Text input' type='text' className='min-w-[300px]' />,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should call onChange', async () => {
    const InputWrapper = () => {
      const [value, setValue] = useState('');
      return (
        <Input
          label='Text input'
          type='text'
          className='min-w-[300px]'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };

    render(<InputWrapper />);

    await userEvent.type(screen.getByLabelText(/text input/i), 'Hello world!');
    expect(screen.getByLabelText(/text input/i)).toHaveDisplayValue('Hello world!');
  });
});
