import { FOCUSING_SECONDS, SHORT_BREAK_SECONDS, LONG_BREAK_SECONDS } from './SECONDS';

describe("Constants shouldn't changed", () => {
  it("Timer periods shouldn't changed", () => {
    expect(FOCUSING_SECONDS).toEqual(20 * 60);
    expect(SHORT_BREAK_SECONDS).toEqual(5 * 60);
    expect(LONG_BREAK_SECONDS).toEqual(15 * 60);
  });
});
