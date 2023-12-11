import { ElectronApplication, _electron as electron } from '@playwright/test';
import { findLatestBuild, parseElectronApp } from 'electron-playwright-helpers';

import { FOCUSING_SECONDS } from '@modules/timer/constants/SECONDS';
import { Periods } from '@modules/timer/types/Periods';
import { toMinutesAndSeconds } from '@modules/timer/utils/formatSeconds';

import { test } from '../fixtures/timer';

//
//

let electronApp: ElectronApplication | undefined;

test.beforeAll(async () => {
  const latestBuild = findLatestBuild('apps/desktop/out');
  const appInfo = parseElectronApp(latestBuild);

  electronApp = await electron.launch({
    args: [appInfo.main], // main file from package.json
    executablePath: appInfo.executable, // path to the Electron executable
  });
});

test.afterAll(async () => {
  await electronApp?.close();
});

//
//

// test('Run desktop app', async () => {
//   const window = await electronApp.firstWindow();
//   const title = await window.getByText('Hello from Nextjs');
//   expect(title).toBeVisible();
// });

test('timer workflow', async ({ timerScreen }) => {
  test.setTimeout(80 * 1000);

  await timerScreen.fillInput('Keep calm and make some code');

  await timerScreen.waitForFocusing();

  await timerScreen.waitForShortBreak();

  await timerScreen.waitForFocusing();

  await timerScreen.waitForShortBreak();

  await timerScreen.waitForFocusing();

  await timerScreen.waitForLongBreak();

  await timerScreen.timeShouldBe(toMinutesAndSeconds(FOCUSING_SECONDS));
});

test('when select new period switching order should be reseted', async ({ timerScreen }) => {
  test.setTimeout(80 * 1000);

  await timerScreen.waitForFocusing();

  await timerScreen.selectPeriod(Periods.LognBreak);
  await timerScreen.waitForLongBreak();

  // Default workflow
  await timerScreen.waitForFocusing();

  await timerScreen.waitForShortBreak();

  await timerScreen.waitForFocusing();

  await timerScreen.waitForShortBreak();

  await timerScreen.waitForFocusing();

  await timerScreen.waitForLongBreak();

  await timerScreen.timeShouldBe(toMinutesAndSeconds(FOCUSING_SECONDS));
});
