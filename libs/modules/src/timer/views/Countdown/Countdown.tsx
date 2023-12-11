import { formatSeconds } from '@modules/timer/utils/formatSeconds';
import React from 'react';

//
//

interface ICountdown {
  seconds: number;
}

export const Countdown: React.FC<ICountdown> = ({ seconds }) => {
  const time = formatSeconds(seconds);
  return (
    <h1 className='text-[114px] text-center font-bold'>
      {time.minutes}:{time.seconds}
    </h1>
  );
};
