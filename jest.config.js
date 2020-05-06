module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/__tests__/*.ts'],
  collectCoverageFrom: ['**/src/**'],
  coverageReporters: ['text'],
};
