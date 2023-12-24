export const FOCUSING_SECONDS = 10;
export const SHORT_BREAK_SECONDS = 5;
export const LONG_BREAK_SECONDS = 7;

jest.mock('./SECONDS', () => ({
  FOCUSING_SECONDS: 10,
  SHORT_BREAK_SECONDS: 5,
  LONG_BREAK_SECONDS: 7,
}));
