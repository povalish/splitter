/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@ui-kit/components/input/Input';
import { Decorator } from '@sb-react/utils/Decorator';

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

// Sandbox Button
//

export const TextInput: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        label='Text input'
        type='text'
        className='min-w-[300px]'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
