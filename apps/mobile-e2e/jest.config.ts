/* eslint-disable */
export default {
  displayName: 'mobile-e2e',
  preset: '../../jest.preset.js',
  testMatch: ['<rootDir>/src/**/*.test.ts?(x)', '<rootDir>/src/**/*.spec.ts?(x)'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  transform: {
    '^.+\\.(ts|js|html)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.e2e.json' }],
  },
  moduleNameMapper: {
    '@modules/(.*)': '<rootDir>/../../libs/modules/src/$1',
    '@ui-kit/(.*)': '<rootDir>/../../livs/ui-kit/$1',
  },
};
