import { cx } from 'class-variance-authority';
import { Periods } from '../types/Periods';

export function getBackgroundByPeriod(period: Periods) {
  return cx(
    period === Periods.Focusing && 'bg-colorPeriodFocusing',
    period === Periods.ShortBreak && 'bg-colorPeriodShortBreak',
    period === Periods.LognBreak && 'bg-colorPeriodLongBreak',
  );
}
