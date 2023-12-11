import { Periods } from '../../types/Periods';
import { getBackgroundByPeriod } from '../getBackgroundByPeriod';

describe('Getting background by period', () => {
  it('should return background-color (tailwind variable) by the timer period', () => {
    const focusingBG = getBackgroundByPeriod(Periods.Focusing);
    const shortBreakBG = getBackgroundByPeriod(Periods.ShortBreak);
    const lognBreakBG = getBackgroundByPeriod(Periods.LognBreak);

    expect(focusingBG).toEqual('bg-colorPeriodFocusing');
    expect(shortBreakBG).toEqual('bg-colorPeriodShortBreak');
    expect(lognBreakBG).toEqual('bg-colorPeriodLongBreak');
  });
});
