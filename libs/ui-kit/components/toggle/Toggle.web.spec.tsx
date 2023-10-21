import React from 'react';
import { render } from '@testing-library/react';
import { Toggle } from './Toggle';

//
//

describe('Toggle component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Toggle label='Toggle' />);
    expect(baseElement).toMatchSnapshot();
  });
});
