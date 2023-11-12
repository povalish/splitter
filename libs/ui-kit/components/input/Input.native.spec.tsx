import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Input } from './Input.native';

//
//

describe('Input component', () => {
  it('should render successfully', () => {
    const root = render(<Input label='Text input' />);
    expect(root).toMatchSnapshot();
  });

  it('should change value', () => {
    const handleChange = jest.fn();
    render(<Input label='Text input' onChangeText={handleChange} />);

    fireEvent.changeText(screen.getByTestId('native-input'), 'Hello!');
    expect(handleChange).toBeCalledWith('Hello!');
  });
});
