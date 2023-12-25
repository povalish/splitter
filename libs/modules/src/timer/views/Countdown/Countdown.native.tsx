import React from 'react';
import { Text } from 'react-native';
import { formatSeconds } from '@modules/timer/utils/formatSeconds';
import { countdown } from './Countdown.classes';

//
//

interface ICountdown {
  seconds: number;
}

export const Countdown: React.FC<ICountdown> = ({ seconds }) => {
  const time = formatSeconds(seconds);
  return (
    <Text className={countdown()}>
      {time.minutes}:{time.seconds}
    </Text>
  );
};
