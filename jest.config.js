module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/setupTests.ts',
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "<rootDir>/tests/__mocks__/styleMock.ts",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/tests/__mocks__/fileMock.ts",
    "\\^(.*)$": "<rootDir>/tests/__mocks__/$1",
    "^beagl(.*)$": "<rootDir>/src/$1"
  }
};
