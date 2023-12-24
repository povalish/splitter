import { Periods } from '@modules/timer/types/Periods';
import { test } from '../fixtures/timer';

//
//

test('timer workflow', async ({ timerScreen }) => {
  await timerScreen.fillInput('Keep calm and make some code');

  await timerScreen.waitForFocusing();

  await timerScreen.selectPeriod(Periods.ShortBreak);

  await timerScreen.waitForShortBreak();

  await timerScreen.selectPeriod(Periods.LognBreak);

  await timerScreen.waitForLongBreak();
});
