import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@ui-kit/components/loader/Loader';

// Config
//

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Components/Loader',
};

export default meta;
type Story = StoryObj<typeof Loader>;

// Stories
//

export const LoaderComponent: Story = {
  render: () => <Loader />,
};
