const ceaser = require('./CaeserCipher');

class Rop_8 extends ceaser {
  constructor(options = 1) {
    super(options);
    this.shift = 8;
  }
}

module.exports = Rop_8;
