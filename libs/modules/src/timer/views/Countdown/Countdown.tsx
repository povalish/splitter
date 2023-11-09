import { formatSeconds } from '@modules/timer/utils/formatSeconds';
import React from 'react';

//
//

interface ICountdown {
  seconds: number;
}

export const Countdown: React.FC<ICountdown> = ({ seconds }) => (
  <h1 className='text-[114px] text-center font-bold'>
    {formatSeconds(seconds).minutes}:{formatSeconds(seconds).seconds}
  </h1>
);
