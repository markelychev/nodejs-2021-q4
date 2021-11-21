const createStreamsLine = require('./createStreamsLine');
const Caesar = require('../ciphers/CaeserCipher');

describe('Test config params', () => {
  test('should return error when User passes incorrent symbols in argument for --config', () => {
    const optionsName = new Map([['-c --config', 'b2-F7']]);
    try {
      createStreamsLine(optionsName);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
  test('should return error when atbash config passed incorect', () => {
    const optionsName = new Map([['-c --config', 'A2']]);
    try {
      createStreamsLine(optionsName);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
  test('User passes correct sequence of symbols as argument for --config that matches regular expression', () => {
    const optionsName = new Map([['-c --config', 'C1']]);
    expect(createStreamsLine(optionsName)[0]).toBeInstanceOf(Caesar);
  });
});
