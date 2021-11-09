const ceaser = require('./CaeserCipher');

class Rot_8 extends ceaser {
  constructor(options = 1) {
    super(options);
    this.shift = 8;
  }
}

module.exports = Rot_8;
