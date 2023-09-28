import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Tab } from './Tab.native';

//
//

describe('Button component', () => {
  it('should render successfully', () => {
    const root = render(<Tab label='focusing' />);
    expect(root).toMatchSnapshot();
  });

  it('should call onSelect', () => {
    const handleSelect = jest.fn();
    render(<Tab label='focusing' onSelect={handleSelect} />);

    fireEvent.press(screen.getByText(/focusing/i));
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
