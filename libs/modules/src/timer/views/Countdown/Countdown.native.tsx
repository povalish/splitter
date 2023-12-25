import React from 'react';
import { Text } from 'react-native';
import { formatSeconds } from '@modules/timer/utils/formatSeconds';
import { countdown } from './Countdown.classes';
import { IStyled } from '@ui-kit/types/Styled';

//
//

interface ICountdown extends IStyled {
  seconds: number;
}

export const Countdown: React.FC<ICountdown> = ({ seconds, className }) => {
  const time = formatSeconds(seconds);
  return (
    <Text className={countdown({ className })}>
      {time.minutes}:{time.seconds}
    </Text>
  );
};
