import React from 'react';
import { render } from '@testing-library/react';
import { Screen } from './Screen';

//
//

describe('Screen component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Screen>Screen content</Screen>);
    expect(baseElement).toMatchSnapshot();
  });
});
