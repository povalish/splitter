import { device, element, by, expect } from 'detox';
import {
  FOCUSING_SECONDS,
  LONG_BREAK_SECONDS,
  SHORT_BREAK_SECONDS,
} from '@modules/timer/constants/SECONDS';
import { toMinutesAndSeconds } from '@modules/timer/utils/formatSeconds';

//
//

describe('Timer Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should counting by the selected period', async () => {
    await element(by.id('main-focus-input')).typeText('Testing Splitter mobile app');

    // Should visible all periods
    await expect(element(by.text(/focusing/i))).toBeVisible();
    await expect(element(by.text(/short break/i))).toBeVisible();
    await expect(element(by.text(/long break/i))).toBeVisible();

    // Timer should 20:00 by default
    await expect(element(by.text(toMinutesAndSeconds(FOCUSING_SECONDS)))).toBeVisible();

    // Should render time for short break
    await element(by.text(/short break/i)).tap();
    await expect(element(by.text(toMinutesAndSeconds(SHORT_BREAK_SECONDS)))).toBeVisible();

    // Should render time for long break
    await element(by.text(/long break/i)).tap();
    await expect(element(by.text(toMinutesAndSeconds(LONG_BREAK_SECONDS)))).toBeVisible();

    // Should render time for focusing
    await element(by.text(/focusing/i)).tap();
    await expect(element(by.text(toMinutesAndSeconds(FOCUSING_SECONDS)))).toBeVisible();
  });
});
