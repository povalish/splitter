/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '@ui-kit/components/tab/Tab.native';

// Config
//

const meta: Meta<typeof Tab> = {
  component: Tab,
  title: 'Components/Tab',
  decorators: [
    (Story) => (
      <View className='w-screen h-screen bg-colorBackground -m-[1rem]'>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tab>;

// Stories
//

// Default
//

export const DefaultTab: Story = {
  render: () => <Tab label='focusing' />,
};

// Selected tab
//

export const SelectedTab: Story = {
  render: () => <Tab label='focusing' active />,
};

// Tab group
//

export const TabGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('tab-1');
    return (
      <View className='flex flex-row gap-2'>
        <View role='presentation'>
          <Tab
            label='focusing'
            onSelect={() => setSelected('tab-1')}
            active={selected === 'tab-1'}
          />
        </View>

        <View role='presentation'>
          <Tab
            label='short break'
            onSelect={() => setSelected('tab-2')}
            active={selected === 'tab-2'}
          />
        </View>

        <View role='presentation'>
          <Tab
            label='long break'
            onSelect={() => setSelected('tab-3')}
            active={selected === 'tab-3'}
          />
        </View>
      </View>
    );
  },
};
