import { test as base } from '@playwright/test';
import { TimerPage } from '../pages/TimerPage';

type TimerFixtures = {
  timerPage: TimerPage;
};

export const test = base.extend<TimerFixtures>({
  timerPage: async ({ page }, use) => {
    // Set up the fixture.
    const timerPage = new TimerPage(page);
    await timerPage.goto();

    // Use the fixture value in the test.
    await use(timerPage);

    // Reset page
    await timerPage.reset();
  },
});

export { expect } from '@playwright/test';
