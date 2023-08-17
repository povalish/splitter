import { test, expect, ElectronApplication, _electron as electron } from '@playwright/test';
import { findLatestBuild, parseElectronApp } from 'electron-playwright-helpers';

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

test('Run desktop app', async () => {
  const window = await electronApp.firstWindow();
  const title = await window.getByText('Hello from Nextjs');
  expect(title).toBeVisible();
});
