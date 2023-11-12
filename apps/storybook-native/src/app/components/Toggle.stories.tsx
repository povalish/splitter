import type { Meta, StoryObj } from '@storybook/react';
import { Toggle as ToggleComponent } from '@ui-kit/components/toggle/Toggle.native';
import { Decorator } from '../utils/Decorator';

// Config
//

const meta: Meta<typeof ToggleComponent> = {
  component: ToggleComponent,
  title: 'Toggle',
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ToggleComponent>;

// Stories
//

export const Base: Story = {
  render: () => <ToggleComponent label='Toggle' />,
};
