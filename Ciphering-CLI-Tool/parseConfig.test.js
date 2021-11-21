const parseConfig = require('./parseConfig');

describe('Error scenarios', () => {
  test('should return error when passes cli argument twice', () => {
    const arg = ['test', 'test', '-c', 'A-A-A-R1-R0-R0-R0-C1-C1-A', '--config', 'A-A-A-R1-R0-R0-R0-C1-C1-A'];
    try {
      parseConfig(arg);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
  test("should return error when User doesn't pass -c or --config argument", () => {
    const arg = ['test', 'test', '-i', './test'];
    try {
      parseConfig(arg);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
  test("should return error when  User passes -i argument with path that doesn't exist or with no read access", () => {
    const arg = ['test', 'test', '-i', './test.test', '-c', 'A-A-A-R1-R0-R0-R0-C1-C1-A'];
    try {
      parseConfig(arg);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
  test("should return error when  User passes -o argument with path that doesn't exist or with no read access", () => {
    const arg = ['test', 'test', '-o', './test.test', '-c', 'A-A-A-R1-R0-R0-R0-C1-C1-A'];
    try {
      parseConfig(arg);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});
