/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '@ui-kit/components/tab/Tab';

// Config
//

const meta: Meta<typeof Tab> = {
  component: Tab,
  title: 'Components/Tab',
  decorators: [
    (Story) => (
      <section className='w-screen h-screen bg-colorBackground -m-[1rem]'>
        <Story />
      </section>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tab>;

// Stories
//

// Sandbox Button
//

export const SandboxTab: Story = {
  render: (props) => <Tab {...props} />,
  args: {
    active: true,
    label: 'Tab',
    tabId: 'tab-1',
    panelId: 'panel-1',
  },
  argTypes: {
    active: {
      options: [true, false],
      control: { type: 'radio' },
    },
    label: {
      control: 'text',
      description: 'Tab label',
    },
    tabId: {
      control: 'text',
      description: 'Tab ID',
    },
    panelId: {
      control: 'text',
      description: 'Panel ID',
    },
  },
};

// Default
//

export const DefaultTab: Story = {
  render: () => <Tab label='focusing' tabId='tab-1' panelId='panel-1' />,
};

// Selected tab
//

export const SelectedTab: Story = {
  render: () => <Tab label='focusing' tabId='tab-1' panelId='panel-1' active />,
};

// Focused tab
//

export const FocusedTab: Story = {
  render: () => <Tab label='focusing' tabId='tab-1' panelId='panel-1' active />,
  parameters: { pseudo: { focus: true } },
};

// Tab group
//

export const TabGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('tab-1');
    return (
      <ul role='tablist' className='flex gap-2'>
        <li role='presentation'>
          <Tab
            label='focusing'
            tabId='tab-1'
            panelId='panel-1'
            onSelect={() => setSelected('tab-1')}
            active={selected === 'tab-1'}
          />
        </li>

        <li role='presentation'>
          <Tab
            label='short break'
            tabId='tab-2'
            panelId='panel-2'
            onSelect={() => setSelected('tab-2')}
            active={selected === 'tab-2'}
          />
        </li>

        <li role='presentation'>
          <Tab
            label='long break'
            tabId='tab-3'
            panelId='panel-3'
            onSelect={() => setSelected('tab-3')}
            active={selected === 'tab-3'}
          />
        </li>
      </ul>
    );
  },
};
