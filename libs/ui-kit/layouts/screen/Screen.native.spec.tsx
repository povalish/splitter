import React from 'react';
import { render } from '@testing-library/react-native';
import { Screen } from './Screen';

//
//

describe('UI Kit - Layout - Native Screen component', () => {
  it('should render successfully', () => {
    const component = render(<Screen>Content</Screen>);
    expect(component).toMatchSnapshot();
  });
});
