import { useEffect, useRef, useState } from 'react';
import { useCountdown } from './useCountdown';
import { Periods } from '../types/Periods';
import { FOCUSING_SECONDS, SHORT_BREAK_SECONDS, LONG_BREAK_SECONDS } from '../constants/SECONDS';
import { getSecondsByPeriod } from '../utils/getSecondsByPeriod';

//
//

type Options = {
  isAutoSwitchPeriod?: boolean;
  initPeriod?: Periods;
};

export function useSwitchingPeriods(options?: Options) {
  const { isAutoSwitchPeriod, initPeriod } = options || { isAutoSwitchPeriod: false };
  const [currPeriod, setCurrPeriod] = useState<Periods>(initPeriod || Periods.Focusing);
  const prevPeriod = useRef<Periods | null>(null);
  const shortBreakCounter = useRef(0);
  const { count, start, stop, reset, isActive } = useCountdown({
    seconds: getSecondsByPeriod(initPeriod || Periods.Focusing),
  });

  // Actions
  //

  const startNewPeriod = (period: Periods) => {
    switchPeriod(period);
    prevPeriod.current = null;
    shortBreakCounter.current = 0;
  };

  const switchPeriod = (period: Periods) => {
    setCurrPeriod(period);
    prevPeriod.current = currPeriod;

    if (period === Periods.Focusing) {
      reset(FOCUSING_SECONDS);
    }

    if (period === Periods.ShortBreak) {
      reset(SHORT_BREAK_SECONDS);
    }

    if (period === Periods.LognBreak) {
      reset(LONG_BREAK_SECONDS);
    }
  };

  const startNextPeriod = () => {
    if (!prevPeriod.current) {
      switchPeriod(Periods.Focusing);
    }

    if (prevPeriod.current === Periods.Focusing) {
      if (shortBreakCounter.current < 2) {
        switchPeriod(Periods.ShortBreak);
        shortBreakCounter.current += 1;
      } else {
        switchPeriod(Periods.LognBreak);
        shortBreakCounter.current = 0;
      }
    }

    if (prevPeriod.current === Periods.ShortBreak) {
      switchPeriod(Periods.Focusing);
    }

    if (prevPeriod.current === Periods.LognBreak) {
      switchPeriod(Periods.Focusing);
    }
  };

  const startOrPause = () => {
    if (isActive) {
      stop();
    }

    if (!isActive && currPeriod) {
      start();
    }

    if (!isActive && !currPeriod) {
      startNextPeriod();
    }
  };

  // Effects
  //

  useEffect(() => {
    if (count === 0 && !isAutoSwitchPeriod && currPeriod) {
      prevPeriod.current = currPeriod;
      startNextPeriod();
    }
  }, [count, isAutoSwitchPeriod]);

  return {
    timer: count,
    period: currPeriod,
    isActivePeriod: isActive,
    startNewPeriod,
    stopCurrentPeriod: stop,
    startOrPause,
  };
}
