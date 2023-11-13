import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

//
//

describe('Input component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Input label='Text input' type='text' className='min-w-[300px]' />,
    );
    expect(baseElement).toMatchSnapshot();
  });
});
