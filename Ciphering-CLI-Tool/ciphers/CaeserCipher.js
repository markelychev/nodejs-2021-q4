const stream = require('stream');
const letters = require('../configApp/letters');

class CaeserCipher extends stream.Transform {
  constructor(options = 1) {
    if (options < 0 || options > 1) {
      throw new Error('Caeser cipher config error');
    }
    super(options);
    this.shift = 1;
    this.options = options;
  }
  _transform(chunk, encoding, callback) {
    let val = chunk
      .toString()
      .split('')
      .map((item) => {
        if (this.options) {
          return this.encrypt(item);
        } else {
          return this.decrypt(item);
        }
      })
      .join('');
    this.push(`${val}`);
    callback();
  }

  encrypt(char) {
    for (let key in letters) {
      if (letters[key].indexOf(char) !== -1) {
        return letters[key][(letters[key].indexOf(char) + this.shift) % letters[key].length];
      }
    }

    return char;
  }

  decrypt(char) {
    for (let key in letters) {
      if (letters[key].indexOf(char) !== -1) {
        const i = letters[key].indexOf(char) - this.shift >= 0 ? letters[key].indexOf(char) - this.shift : letters[key].length - this.shift;
        return letters[key][i];
      }
    }

    return char;
  }
}

module.exports = CaeserCipher;
