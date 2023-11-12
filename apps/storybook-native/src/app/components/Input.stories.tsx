/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@ui-kit/components/input/Input.native';
import { Decorator } from '../utils/Decorator';

// Config
//

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

// Stories
//

// Default
//

export const DefaultInput: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input label='Text input' className='min-w-[300px]' value={value} onChangeText={setValue} />
    );
  },
};
