'use client';

import React, { useState } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { cx } from 'class-variance-authority';

import { Screen } from '@ui-kit/layouts/screen/Screen.native';
import { Input } from '@ui-kit/components/input/Input.native';
import { Button } from '@ui-kit/components/button/Button.native';

import { Periods } from '@modules/timer/views/Periods/Periods.native';
import { Countdown } from '@modules/timer/views/Countdown/Countdown.native';
import { Periods as PeriodsEnum } from '@modules/timer/types/Periods';
import { useSwitchingPeriods } from '@modules/timer/hooks/useSwitchingPeriods';
import { getBackgroundByPeriod } from '@modules/timer/utils/getBackgroundByPeriod';

import type { RootStackParamList } from '../app/App';

//
//

interface ITimerScreen extends NativeStackScreenProps<RootStackParamList, 'Timer'> {}

export const TimerScreen: React.FC<ITimerScreen> = () => {
  const [inputText, setInputText] = useState('');
  const { timer, period, isActivePeriod, startOrPause, startNewPeriod } = useSwitchingPeriods({
    initPeriod: PeriodsEnum.Focusing,
  });

  const background = getBackgroundByPeriod(period);

  return (
    <Screen className={cx('w-screen h-screen')}>
      <View
        className={cx('container mx-auto flex-1 px-4 flex flex-col transition-colors', background)}
      >
        <View className='flex flex-grow flex-col items-center justify-center'>
          <Periods active={period} onChange={(p) => startNewPeriod(p)} />
          <Countdown seconds={timer} />

          <Button
            className='min-w-[175px] mt-6'
            variant={isActivePeriod ? 'danger' : 'success'}
            onPress={startOrPause}
          >
            {isActivePeriod ? 'Pause' : 'Start'}
          </Button>
        </View>

        <View className='flex justify-center pb-12 md:pb-16 mt-10'>
          <Input
            className='w-full sm:max-w-[320px]'
            label='Main focus on this time?'
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
        </View>
      </View>
    </Screen>
  );
};
