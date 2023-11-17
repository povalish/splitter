import { formatSeconds } from '../formatSeconds';

describe('Formating seconds to readbale string', () => {
  it('should return 0 for days, hours, minutes, seconds if passed 0 seconds', () => {
    const { days, hours, minutes, seconds } = formatSeconds(0);
    [days, hours, minutes, seconds].forEach((time) => {
      expect(time).toEqual('00');
    });
  });

  it('should return seconds in right way', () => {
    const { seconds } = formatSeconds(50);
    expect(seconds).toEqual('50');
  });

  it('should return minutes in right way', () => {
    const { minutes, seconds } = formatSeconds(120);
    expect(minutes).toEqual('02');
    expect(seconds).toEqual('00');
  });

  it('should return hours in right way', () => {
    const { hours, minutes, seconds } = formatSeconds(60 * 60 * 2 + 15);
    expect(seconds).toEqual('15');
    expect(minutes).toEqual('00');
    expect(hours).toEqual('02');
  });

  it('should return days in right way', () => {
    const threeDays = 60 * 60 * 24 * 3;
    const twoHours = 60 * 60 * 2;
    const fifteenSeconds = 15;

    const { days, hours, minutes, seconds } = formatSeconds(threeDays + twoHours + fifteenSeconds);

    expect(seconds).toEqual('15');
    expect(minutes).toEqual('00');
    expect(hours).toEqual('02');
    expect(days).toEqual('03');
  });
});
