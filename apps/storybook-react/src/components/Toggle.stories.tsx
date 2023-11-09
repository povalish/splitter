/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@ui-kit/components/toggle/Toggle';
import { Decorator } from '@sb-react/utils/Decorator';

// Config
//

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Components/Toggle',
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// Stories
//

export const ToggleComponent: Story = {
  render: () => <Toggle label='Autostart' />,
};
