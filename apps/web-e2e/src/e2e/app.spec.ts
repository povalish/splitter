import { test } from '../fixtures/timer';
import { Periods } from '@modules/timer/types/Periods';

//
//

test('timer workflow', async ({ timerPage }) => {
  await timerPage.fillInput('Keep calm and make some code');

  await timerPage.waitForFocusing();

  await timerPage.selectPeriod(Periods.ShortBreak);

  await timerPage.waitForShortBreak();

  await timerPage.selectPeriod(Periods.LognBreak);

  await timerPage.waitForLongBreak();
});
