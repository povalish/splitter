import React from 'react';
import { render } from '@testing-library/react';
import { Tab } from './Tab';

//
//

describe('Tab component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tab label='focusing' tabId='tab-1' panelId='panel-1' active />);
    expect(baseElement).toMatchSnapshot();
  });
});
