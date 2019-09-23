module.exports = {
  roots: ['<rootDir>/packages'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  watchPlugins: [
    'jest-watch-lerna-packages',
    'jest-watch-yarn-workspaces',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    [
      'jest-watch-continue',
      {
        key: 'n',
        prompt: 'start continue mode'
      }
    ]
  ],
  setupFilesAfterEnv: [
    'jest-extended',
    'jest-environment-enzyme',
    'jest-styled-components',
    '<rootDir>/test/unit/setup.ts'
  ],
  reporters: ['default', 'jest-github-reporter'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
