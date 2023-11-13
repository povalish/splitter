import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Tab } from './Tab';

//
//

describe('Tab component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tab label='focusing' tabId='tab-1' panelId='panel-1' active />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should call onSelect', () => {
    const handleSelect = jest.fn();
    render(<Tab label='focusing' tabId='tab-1' panelId='panel-1' active onSelect={handleSelect} />);

    fireEvent.click(screen.getByText(/focusing/i));
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
