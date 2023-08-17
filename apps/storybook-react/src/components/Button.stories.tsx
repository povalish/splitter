import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/button/Button';

// Config
//

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

// Stories
//

// Sandbox Button
//

export const SandboxButton: Story = {
  render: (props) => (
    <Button type='button' {...props}>
      Submit
    </Button>
  ),
  args: {
    variant: 'success',
  },
  argTypes: {
    variant: {
      options: ['success', 'danger', 'danger-text'],
      control: { type: 'radio' },
      defaultValue: 'success',
    },
  },
};

// Default
//

export const DefaultButton: Story = {
  render: () => <Button type='button'>Submit</Button>,
};

export const DisabledButton: Story = {
  render: () => (
    <Button type='button' disabled>
      Submit
    </Button>
  ),
};

export const FocusedButton: Story = {
  render: () => <Button type='button'>Submit</Button>,
  parameters: { pseudo: { focus: true } },
};

// Danger button
//

export const DangerButton: Story = {
  render: () => (
    <Button type='button' variant='danger'>
      Submit
    </Button>
  ),
};

export const FocusedDangerButton: Story = {
  render: () => (
    <Button type='button' variant='danger'>
      Submit
    </Button>
  ),
  parameters: { pseudo: { focus: true } },
};

// Danger text button
//

export const DangerTextButton: Story = {
  render: () => (
    <Button type='button' variant='danger-text'>
      Submit
    </Button>
  ),
};

export const FocusedDangerTextButton: Story = {
  render: () => (
    <Button type='button' variant='danger-text'>
      Submit
    </Button>
  ),
  parameters: { pseudo: { focus: true } },
};

export const DisabledDangerTextButton: Story = {
  render: () => (
    <Button type='button' disabled variant='danger-text'>
      Submit
    </Button>
  ),
};
