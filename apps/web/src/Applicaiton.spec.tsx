import React from 'react';
import { render } from '@testing-library/react';

import { Application } from './Application';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Application />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Application />);
    expect(getByText('Hello from')).toBeTruthy();
  });
});
