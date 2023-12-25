import React from 'react';
import { View } from 'react-native';

import { Tab } from '@ui-kit/components/tab/Tab';

import { IPeriods } from './Periods.interface';
import { Periods as PeriodsEnum } from '../../types/Periods';
import { list } from './Periods.classes';

//
//

export const Periods: React.FC<IPeriods> = ({ active, className, onChange }) => (
  <View role='tablist' className={list({ className })}>
    <View role='presentation'>
      <Tab
        label='focusing'
        tabId={PeriodsEnum.Focusing}
        onSelect={() => onChange(PeriodsEnum.Focusing)}
        active={active === PeriodsEnum.Focusing}
      />
    </View>

    <View role='presentation'>
      <Tab
        label='short break'
        tabId={PeriodsEnum.ShortBreak}
        onSelect={() => onChange(PeriodsEnum.ShortBreak)}
        active={active === PeriodsEnum.ShortBreak}
      />
    </View>

    <View role='presentation'>
      <Tab
        label='long break'
        tabId={PeriodsEnum.LognBreak}
        onSelect={() => onChange(PeriodsEnum.LognBreak)}
        active={active === PeriodsEnum.LognBreak}
      />
    </View>
  </View>
);
