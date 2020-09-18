module.exports = {
  preset: 'ts-jest',
  testRegex: './(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
