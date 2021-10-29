const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./client/tsconfig');

module.exports = {
  projects: [
    {
      globals: {
        'ts-jest': {
          tsconfig: 'client/tsconfig.json',
        },
      },
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      testRegex: 'client/.+\\.(test|spec)\\.(ts|js)x?$',
      testPathIgnorePatterns: [
        '/node_modules/',
        '/build/',
        '/dist/',
        '/output/',
      ],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/client' }),
    },
    {
      globals: {
        'ts-jest': {
          tsconfig: 'server/tsconfig.json',
        },
      },
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      testRegex: 'server/.+\\.(test|spec)\\.(ts|js)$',
      testPathIgnorePatterns: [
        '/node_modules/',
        '/build/',
        '/dist/',
        '/output/',
      ],
    },
  ],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/vendor/**', '!**/*.test.*'],
};
