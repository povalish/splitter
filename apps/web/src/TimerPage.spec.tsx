import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { TimerPage } from './TimerPage';
import { formatSeconds } from '@modules/timer/utils/formatSeconds';
import {
  FOCUSING_SECONDS,
  LONG_BREAK_SECONDS,
  SHORT_BREAK_SECONDS,
} from '@modules/timer/constants/SECONDS';

//
//

describe('WEB - Timer Page', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should render default state', () => {
    render(<TimerPage />);

    const focusingTime = formatSeconds(FOCUSING_SECONDS);
    expect(screen.getByText(`${focusingTime.minutes}:${focusingTime.seconds}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start/i }));
  });

  it('should start/pause timer', async () => {
    render(<TimerPage />);
    fireEvent.click(screen.getByRole('button', { name: /start/i }));

    const checkTime = (seconds: number) => {
      act(() => {
        jest.advanceTimersByTime(1000);
      });

      const focusingTime = formatSeconds(seconds);
      expect(
        screen.getByText(`${focusingTime.minutes}:${focusingTime.seconds}`),
      ).toBeInTheDocument();
    };

    checkTime(FOCUSING_SECONDS - 1);
    checkTime(FOCUSING_SECONDS - 2);

    fireEvent.click(screen.getByRole('button', { name: /pause/i }));

    checkTime(FOCUSING_SECONDS - 2);
    checkTime(FOCUSING_SECONDS - 2);
  });

  it('should switch periods', () => {
    render(<TimerPage />);

    fireEvent.click(screen.getByText(/focusing/i));
    let focusingTime = formatSeconds(FOCUSING_SECONDS);
    expect(screen.getByText(`${focusingTime.minutes}:${focusingTime.seconds}`)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/short break/i));
    focusingTime = formatSeconds(SHORT_BREAK_SECONDS);
    expect(screen.getByText(`${focusingTime.minutes}:${focusingTime.seconds}`)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/long break/i));
    focusingTime = formatSeconds(LONG_BREAK_SECONDS);
    expect(screen.getByText(`${focusingTime.minutes}:${focusingTime.seconds}`)).toBeInTheDocument();
  });

  it('should change main focus text input', async () => {
    jest.useRealTimers();

    render(<TimerPage />);
    await userEvent.type(
      screen.getByLabelText(/main focus on this time?/i),
      'Chill and do the job',
    );
    expect(screen.getByLabelText(/main focus on this time?/i)).toHaveDisplayValue(
      'Chill and do the job',
    );
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
