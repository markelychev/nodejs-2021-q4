const Rot = require('./Rot_8');

const rot = new Rot();
describe('Test rot chiper', () => {
  test('method _transform method should be defined', () => {
    expect(rot._transform).toBeDefined();
  });
  test('method encrypt should be defined', () => {
    expect(rot.encrypt).toBeDefined();
  });
  test('should encrypt letters', () => {
    expect(rot.encrypt('a')).toBe('i');
  });
  test('should not encode sumbols', () => {
    expect(rot.encrypt('_')).toBe('_');
  });
  test('method decrypt should be defined', () => {
    expect(rot.decrypt).toBeDefined();
  });
  test('should decrypt letters', () => {
    expect(rot.decrypt('a')).toBe('s');
  });
  test('should not decrypt sumbols', () => {
    expect(rot.encrypt('_')).toBe('_');
  });
});
