import { Periods } from '@modules/timer/types/Periods';

export interface IPeriods {
  active: Periods;
  onChange: (period: Periods) => void;
}
