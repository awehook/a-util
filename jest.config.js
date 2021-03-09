module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@getutil/(.*?)$': '<rootDir>/packages/$1/src'
  },
  rootDir: __dirname,
  testMatch: ['<rootDir>/packages/**/test/**/*test.[jt]s?(x)']
};
