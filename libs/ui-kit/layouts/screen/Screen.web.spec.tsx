import React from 'react';
import { render } from '@testing-library/react';
import { Screen } from './Screen';

//
//

describe('UI Kit - Layout - Screen component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Screen>Content</Screen>);
    expect(baseElement).toMatchSnapshot();
  });
});
