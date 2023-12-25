import { Periods } from '@modules/timer/types/Periods';
import { IStyled } from '@ui-kit/types/Styled';

export interface IPeriods extends IStyled {
  active: Periods;
  onChange: (period: Periods) => void;
}
