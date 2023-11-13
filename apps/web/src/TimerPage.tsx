'use client';

import React, { useState } from 'react';
import { cx } from 'class-variance-authority';

import { Screen } from '@ui-kit/layouts/screen/Screen';
import { Input } from '@ui-kit/components/input/Input';
import { Button } from '@ui-kit/components/button/Button';

import { Periods } from '@modules/timer/views/Periods';
import { Periods as PeriodsEnum } from '@modules/timer/types/Periods';
import { Countdown } from '@modules/timer/views/Countdown';
import { useSwitchingPeriods } from '@modules/timer/hooks/useSwitchingPeriods';
import { getBackgroundByPeriod } from '@modules/timer/utils/getBackgroundByPeriod';
import { useDocumentTitle } from './utils/useDocumentTitle';
import { toMinutesAndSeconds } from '@modules/timer/utils/formatSeconds';

//
//

export const TimerPage: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const { timer, period, isActivePeriod, handleStartPause, startNewPeriod } = useSwitchingPeriods({
    initPeriod: PeriodsEnum.Focusing,
  });

  const bg = getBackgroundByPeriod(period);
  useDocumentTitle({
    title:
      timer === 0 ? 'Pomogator' : `${period.toLocaleUpperCase()} | ${toMinutesAndSeconds(timer)}`,
  });

  return (
    <Screen className={cx('w-screen h-screen', bg)}>
      <div className='container mx-auto w-full h-full px-4 flex flex-col'>
        <main className='flex flex-grow flex-col items-center justify-center gap-6'>
          <Periods active={period} onChange={(p) => startNewPeriod(p, true)} />
          <Countdown seconds={timer} />
          <Button
            className='min-w-[175px]'
            variant={isActivePeriod ? 'danger' : 'success'}
            onClick={handleStartPause}
          >
            {isActivePeriod ? 'Pause' : 'Start'}
          </Button>
        </main>

        <div className='flex justify-center pb-12 md:pb-16 mt-10'>
          <Input
            className='w-full sm:max-w-[320px]'
            label='Main focus on this time?'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </div>
    </Screen>
  );
};
