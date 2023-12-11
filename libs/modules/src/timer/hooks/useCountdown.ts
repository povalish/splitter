import { useEffect, useState } from 'react';

//
//

type Options = {
  seconds: number;
  isIncrement?: boolean;
  isAutostart?: boolean;
};

export function useCountdown({ isIncrement = false, isAutostart = false, seconds }: Options) {
  const [count, setCount] = useState(seconds);
  const [isActive, setIsActive] = useState(isAutostart);

  const start = (newSeconds?: number) => {
    setIsActive(true);

    if (newSeconds) {
      setCount(newSeconds);
    }
  };

  const stop = () => {
    setIsActive(false);
  };

  const reset = (initSeconds = seconds) => {
    setCount(initSeconds);
    setIsActive(isAutostart);
  };

  useEffect(() => {
    let timerID: ReturnType<typeof setTimeout> | undefined = undefined;

    if (isActive) {
      timerID = setTimeout(() => {
        setCount(count + (isIncrement ? 1 : -1));
      }, 1000);
    }

    if (count === 0) {
      clearTimeout(timerID);
      setIsActive(false);
    }

    return () => {
      clearTimeout(timerID);
    };
  }, [count, isActive]);

  return {
    count,
    start,
    stop,
    reset,
    isActive,
  };
}
