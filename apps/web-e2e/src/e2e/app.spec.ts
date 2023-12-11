import { test } from '../fixtures/timer';
import { FOCUSING_SECONDS } from '@modules/timer/constants/SECONDS';
import { Periods } from '@modules/timer/types/Periods';
import { toMinutesAndSeconds } from '@modules/timer/utils/formatSeconds';

/**
 * On first load we should see:
 * 1. Current selected pariod is Focusing
 * 2. Timer on the middle of the screen should equal to Focusing time
 * 3. And timer should be pause and avaliable 'Start' button
 *
 * Then switching periods should be: (focusing > short break) x2 > focusing > long break
 */

test('timer workflow', async ({ timerPage }) => {
  test.setTimeout(80 * 1000);

  await timerPage.fillInput('Keep calm and make some code');

  await timerPage.waitForFocusing();

  await timerPage.waitForShortBreak();

  await timerPage.waitForFocusing();

  await timerPage.waitForShortBreak();

  await timerPage.waitForFocusing();

  await timerPage.waitForLongBreak();

  await timerPage.timeShouldBe(toMinutesAndSeconds(FOCUSING_SECONDS));
});

test('when select new period switching order should be restored', async ({ timerPage }) => {
  test.setTimeout(80 * 1000);

  await timerPage.waitForFocusing();

  await timerPage.selectPeriod(Periods.LognBreak);
  await timerPage.waitForLongBreak();

  // Default workflow
  await timerPage.waitForFocusing();

  await timerPage.waitForShortBreak();

  await timerPage.waitForFocusing();

  await timerPage.waitForShortBreak();

  await timerPage.waitForFocusing();

  await timerPage.waitForLongBreak();

  await timerPage.timeShouldBe(toMinutesAndSeconds(FOCUSING_SECONDS));
});
