import { Metadata } from 'next';
import { TimerPage } from '../src/TimerPage';

export const metadata: Metadata = {
  title: 'Pomogator',
  description: 'Pomogator timer based on Pomodoro Technique',
};

export default async function Index() {
  return <TimerPage />;
}
