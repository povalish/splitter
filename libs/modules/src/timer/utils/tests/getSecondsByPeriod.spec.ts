import { FOCUSING_SECONDS, LONG_BREAK_SECONDS, SHORT_BREAK_SECONDS } from '../../constants/SECONDS';
import { Periods } from '../../types/Periods';
import { getSecondsByPeriod } from '../getSecondsByPeriod';

describe('Getting timer seconds by period', () => {
  it('should return seconds by the timer period', () => {
    const focusing = getSecondsByPeriod(Periods.Focusing);
    const shortBreak = getSecondsByPeriod(Periods.ShortBreak);
    const lognBreak = getSecondsByPeriod(Periods.LognBreak);

    expect(focusing).toEqual(FOCUSING_SECONDS);
    expect(shortBreak).toEqual(SHORT_BREAK_SECONDS);
    expect(lognBreak).toEqual(LONG_BREAK_SECONDS);
  });
});
