/* eslint-disable implicit-arrow-linebreak */
import { act, renderHook } from '@testing-library/react';
import { useCountdown } from '../useCountdown';

describe('TIMER MODULE - useCountdown', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should be disabled and should not counting if autostart disabled', () => {
    const { result } = renderHook(() => useCountdown({ seconds: 10 }));
    expect(result.current.isActive).toBe(false);
    expect(result.current.count).toBe(10);
  });

  it('should counting when autostart is anebled', () => {
    const { result, rerender } = renderHook(() => useCountdown({ seconds: 10, isAutostart: true }));
    expect(result.current.isActive).toBe(true);

    act(() => {
      rerender();
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.count).toBe(9);

    act(() => {
      rerender();
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.count).toBe(8);
  });

  it('should counting incrementally', () => {
    const { result, rerender } = renderHook(() =>
      useCountdown({
        seconds: 10,
        isAutostart: true,
        isIncrement: true,
      }),
    );
    expect(result.current.isActive).toBe(true);

    act(() => {
      rerender();
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.count).toBe(11);

    act(() => {
      rerender();
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.count).toBe(12);
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
