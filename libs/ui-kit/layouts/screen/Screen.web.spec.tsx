import React from 'react';
import { render } from '@testing-library/react';
import { Screen } from './Screen';

//
//

describe('Screen layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Screen>Content</Screen>);
    expect(baseElement).toMatchSnapshot();
  });
});
