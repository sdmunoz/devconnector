module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
};
