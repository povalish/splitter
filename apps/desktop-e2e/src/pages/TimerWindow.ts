import {
  FOCUSING_SECONDS,
  LONG_BREAK_SECONDS,
  SHORT_BREAK_SECONDS,
} from '@modules/timer/constants/SECONDS';
import { Periods } from '@modules/timer/types/Periods';
import { toMinutesAndSeconds } from '@modules/timer/utils/formatSeconds';
import { Locator, Page, expect } from '@playwright/test';

export class TimerWindow {
  private readonly timer: Locator;
  private readonly buttonStart: Locator;
  private readonly buttonPause: Locator;
  private readonly input: Locator;
  private readonly tabs: Locator;

  constructor(public readonly page: Page) {
    this.timer = this.page.locator('h1');
    this.buttonStart = this.page.getByRole('button', { name: /Start/i });
    this.buttonPause = this.page.getByRole('button', { name: /Pause/i });
    this.input = this.page.getByLabel(/Main focus on this time?/i);
    this.tabs = this.page.getByRole('tablist');
  }

  public async goto() {
    await this.page.goto('/');
  }

  public async waitForFocusing() {
    await this.timeShouldBe(toMinutesAndSeconds(FOCUSING_SECONDS));
    await this.clickStart();
    await this.page.waitForTimeout((Number(FOCUSING_SECONDS) + 1) * 1000);
  }

  public async waitForShortBreak() {
    await this.timeShouldBe(toMinutesAndSeconds(SHORT_BREAK_SECONDS));
    await this.clickStart();
    await this.page.waitForTimeout((Number(SHORT_BREAK_SECONDS) + 1) * 1000);
  }

  public async waitForLongBreak() {
    await this.timeShouldBe(toMinutesAndSeconds(LONG_BREAK_SECONDS));
    await this.clickStart();
    await this.page.waitForTimeout((Number(LONG_BREAK_SECONDS) + 1) * 1000);
  }

  public async selectPeriod(period: Periods) {
    let tabname = /focusing/i;

    if (period === Periods.ShortBreak) {
      tabname = /short break/i;
    }

    if (period === Periods.LognBreak) {
      tabname = /long break/i;
    }

    await this.tabs.getByRole('tab', { name: tabname }).click();
  }

  public async timeShouldBe(timer: string) {
    expect(await this.timer.innerText()).toEqual(timer);
  }

  public async clickStart() {
    await this.buttonStart.click();
  }

  public async pauseTimer() {
    await this.buttonPause.click();
  }

  public async fillInput(text: string) {
    await this.input.fill(text);
    const inputValue = await this.input.inputValue();
    expect(inputValue).toEqual(text);
  }

  public async reset() {
    await this.page.getByText(/focusing/i).click();
  }
}
