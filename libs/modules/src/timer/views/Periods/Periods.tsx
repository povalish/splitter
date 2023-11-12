'use client';

import React, { useState } from 'react';
import { Tab } from '@ui-kit/components/tab/Tab';

//
//

export const Periods: React.FC = () => {
  const [selected, setSelected] = useState('tab-1');
  return (
    <ul role='tablist' className='flex gap-0 sm:gap-2 flex-nowrap'>
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
}