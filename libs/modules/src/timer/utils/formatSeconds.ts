export function formatSeconds(secondsNumber: number) {
  // Dayes, hours, minutes and seconds
  const days = Math.floor(secondsNumber / 24 / 60 / 60);
  const hoursLeft = Math.floor(secondsNumber - days * 86400);
  const hours = Math.floor(hoursLeft / 3600);
  const minutesLeft = Math.floor(hoursLeft - hours * 3600);
  const minutes = Math.floor(minutesLeft / 60);
  const seconds = secondsNumber % 60;

  const format = (n: number): string | number => (n < 10 ? '0' + n : n);

  return {
    days: format(days),
    hours: format(hours),
    minutes: format(minutes),
    seconds: format(seconds),
  };
}

export function toMinutesAndSeconds(secondsNumber: number) {
  const { minutes, seconds } = formatSeconds(secondsNumber);
  return `${minutes}:${seconds}`;
}
