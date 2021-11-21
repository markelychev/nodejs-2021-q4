const ceaser = require('./CaeserCipher');

class Rot_8 extends ceaser {
  constructor(options = 1) {
    if (options < 0 || options > 1) {
      throw new Error('Rot-8 cipher config error');
    }
    super(options);
    this.shift = 8;
  }
}

module.exports = Rot_8;
