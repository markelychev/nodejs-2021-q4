const Caesor = require('./CaeserCipher');

const caesor = new Caesor();
describe('Test Caesor chiper', () => {
  test('method _transform method should be defined', () => {
    expect(caesor._transform).toBeDefined();
  });
  test('method encrypt should be defined', () => {
    expect(caesor.encrypt).toBeDefined();
  });
  test('should encrypt letters', () => {
    expect(caesor.encrypt('a')).toBe('b');
  });
  test('should not encode sumbols', () => {
    expect(caesor.encrypt('_')).toBe('_');
  });
  test('method decrypt should be defined', () => {
    expect(caesor.decrypt).toBeDefined();
  });
  test('should decrypt letters', () => {
    expect(caesor.decrypt('a')).toBe('z');
  });
  test('should not decrypt sumbols', () => {
    expect(caesor.encrypt('_')).toBe('_');
  });
});
