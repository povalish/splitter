import { FOCUSING_SECONDS, LONG_BREAK_SECONDS, SHORT_BREAK_SECONDS } from '../constants/SECONDS';
import { Periods } from '../types/Periods';

//
//

export const getSecondsByPeriod = (period?: Periods | null) => {
  if (period === Periods.Focusing) {
    return FOCUSING_SECONDS;
  }

  if (period === Periods.ShortBreak) {
    return SHORT_BREAK_SECONDS;
  }

  if (period === Periods.LognBreak) {
    return LONG_BREAK_SECONDS;
  }

  return 0;
};
