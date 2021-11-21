const Atbash = require('./Atbash');
const atbash = new Atbash();

describe('Test Atbash chiper', () => {
  test('method _transform method should be defined', () => {
    expect(atbash._transform).toBeDefined();
  });
  test('method encode should be defined', () => {
    expect(atbash.encode).toBeDefined();
  });
  test('should encode letters', () => {
    expect(atbash.encode('a')).toBe('z');
  });
  test('should not encode sumbols', () => {
    expect(atbash.encode('_')).toBe('_');
  });
});
