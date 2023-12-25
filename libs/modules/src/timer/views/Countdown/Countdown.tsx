import { formatSeconds } from '@modules/timer/utils/formatSeconds';
import React from 'react';
import { countdown } from './Countdown.classes';

//
//

interface ICountdown {
  seconds: number;
}

export const Countdown: React.FC<ICountdown> = ({ seconds }) => {
  const time = formatSeconds(seconds);
  return (
    <h1 className={countdown()}>
      {time.minutes}:{time.seconds}
    </h1>
  );
};
