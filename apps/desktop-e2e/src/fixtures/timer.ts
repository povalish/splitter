import { test as base, ElectronApplication, _electron as electron } from '@playwright/test';
import { findLatestBuild, parseElectronApp } from 'electron-playwright-helpers';
import DesktopPackageJSON from '../../../desktop/package.json';
import { TimerWindow } from '../pages/TimerWindow';

//
//

let electronApp: ElectronApplication | undefined;

base.beforeAll(async () => {
  const latestBuild = findLatestBuild(`apps/desktop/release/${DesktopPackageJSON.version}/`);
  const appInfo = parseElectronApp(latestBuild);

  electronApp = await electron.launch({
    args: [appInfo.main], // main file from package.json
    executablePath: appInfo.executable, // path to the Electron executable
  });
});

base.afterAll(async () => {
  await electronApp?.close();
});

//
//

type TimerFixtures = {
  timerScreen: TimerWindow;
};

export const test = base.extend<TimerFixtures>({
  // eslint-disable-next-line no-empty-pattern
  timerScreen: async ({}, use) => {
    const window = await electronApp.firstWindow();

    // Set up the fixture.
    const timerPage = new TimerWindow(window);

    // Use the fixture value in the test.
    await use(timerPage);

    // Reset page
    await timerPage.reset();
  },
});

//
//

export { expect } from '@playwright/test';
