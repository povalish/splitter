// export const FOCUSING_SECONDS = 20 * 60;
// export const SHORT_BREAK_SECONDS = 5 * 60;
// export const LONG_BREAK_SECONDS = 15 * 60;

export const FOCUSING_SECONDS = Number(process.env.NEXT_PUBLIC_FOCUSING_SECONDS);
export const SHORT_BREAK_SECONDS = Number(process.env.NEXT_PUBLIC_SHORT_BREAK_SECONDS);
export const LONG_BREAK_SECONDS = Number(process.env.NEXT_PUBLIC_LONG_BREAK_SECONDS);

console.log('FOCUSING_SECONDS: ', FOCUSING_SECONDS);
