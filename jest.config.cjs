module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/tests/__mocks__/fileMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  testTimeout: 2000
};