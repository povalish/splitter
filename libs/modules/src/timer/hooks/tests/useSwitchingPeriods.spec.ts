import { act, renderHook } from '@testing-library/react';
import { useSwitchingPeriods } from '../useSwitchingPeriods';
import { Periods } from '../../types/Periods';
import { FOCUSING_SECONDS, LONG_BREAK_SECONDS, SHORT_BREAK_SECONDS } from '../../constants/SECONDS';

describe('TIMER MODULE - useSwitchingPeriods', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should start from Focusing period by default and timer should be disabled', () => {
    const { result } = renderHook(() => useSwitchingPeriods({}));
    expect(result.current.period).toBe(Periods.Focusing);
    expect(result.current.timer).toBe(FOCUSING_SECONDS);
    expect(result.current.isActivePeriod).toBe(false);
  });

  it('should switching period and time', () => {
    const { result } = renderHook(() => useSwitchingPeriods({}));

    act(() => {
      result.current.startNewPeriod(Periods.ShortBreak);
    });
    expect(result.current.period).toBe(Periods.ShortBreak);
    expect(result.current.timer).toBe(SHORT_BREAK_SECONDS);

    act(() => {
      result.current.startNewPeriod(Periods.LognBreak);
    });
    expect(result.current.period).toBe(Periods.LognBreak);
    expect(result.current.timer).toBe(LONG_BREAK_SECONDS);

    act(() => {
      result.current.startNewPeriod(Periods.Focusing);
    });
    expect(result.current.period).toBe(Periods.Focusing);
    expect(result.current.timer).toBe(FOCUSING_SECONDS);
  });

  it('should be enabled/disabled when start/pause clicked', () => {
    const { result, rerender } = renderHook(() => useSwitchingPeriods({}));
    const checkTimer = (timer: number) => {
      act(() => {
        rerender();
        jest.advanceTimersByTime(1000);
      });

      expect(result.current.timer).toBe(timer);
    };

    act(() => {
      result.current.startOrPause();
    });

    checkTimer(FOCUSING_SECONDS - 1);
    checkTimer(FOCUSING_SECONDS - 2);

    act(() => {
      result.current.startOrPause();
    });

    checkTimer(FOCUSING_SECONDS - 2);
    checkTimer(FOCUSING_SECONDS - 2);

    act(() => {
      result.current.startOrPause();
    });

    checkTimer(FOCUSING_SECONDS - 3);
    checkTimer(FOCUSING_SECONDS - 4);
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
