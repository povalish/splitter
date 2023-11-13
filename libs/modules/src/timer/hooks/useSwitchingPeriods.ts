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

  const startNewPeriod = (period: Periods, withReset = true) => {
    setCurrPeriod(period);

    if (!withReset) prevPeriod.current = currPeriod;

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
      startNewPeriod(Periods.Focusing);
    }

    if (prevPeriod.current === Periods.Focusing) {
      if (shortBreakCounter.current <= 3) {
        startNewPeriod(Periods.ShortBreak);
        shortBreakCounter.current += 1;
      } else {
        startNewPeriod(Periods.LognBreak);
        shortBreakCounter.current += 0;
      }
    }

    if (prevPeriod.current === Periods.ShortBreak) {
      startNewPeriod(Periods.Focusing);
    }

    if (prevPeriod.current === Periods.LognBreak) {
      startNewPeriod(Periods.Focusing);
    }
  };

  const handleStartPause = () => {
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
    startNextPeriod,
    stopCurrentPeriod: stop,
    handleStartPause,
  };
}
