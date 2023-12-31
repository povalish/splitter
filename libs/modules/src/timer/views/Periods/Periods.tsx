import React from 'react';
import { Tab } from '@ui-kit/components/tab/Tab';
import { IPeriods } from './Periods.interface';
import { Periods as PeriodsEnum } from '../../types/Periods';
import { list } from './Periods.classes';

//
//

export const Periods: React.FC<IPeriods> = ({ active, onChange }) => (
  <ul role='tablist' className={list()}>
    <li role='presentation'>
      <Tab
        label='focusing'
        tabId={PeriodsEnum.Focusing}
        onSelect={() => onChange(PeriodsEnum.Focusing)}
        active={active === PeriodsEnum.Focusing}
      />
    </li>

    <li role='presentation'>
      <Tab
        label='short break'
        tabId={PeriodsEnum.ShortBreak}
        onSelect={() => onChange(PeriodsEnum.ShortBreak)}
        active={active === PeriodsEnum.ShortBreak}
      />
    </li>

    <li role='presentation'>
      <Tab
        label='long break'
        tabId={PeriodsEnum.LognBreak}
        onSelect={() => onChange(PeriodsEnum.LognBreak)}
        active={active === PeriodsEnum.LognBreak}
      />
    </li>
  </ul>
);
