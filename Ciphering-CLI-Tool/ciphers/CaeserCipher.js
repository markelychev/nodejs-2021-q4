const stream = require('stream');
const letters = require('../configApp/letters');

class CaeserCipher extends stream.Transform {
  constructor(options = 1) {
    super(options);
    this.options = options;
  }
  _transform(chunk, encoding, callback) {
    console.log(this.options);
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
        return letters[key][(letters[key].indexOf(char) + 1) % letters[key].length];
      }
    }

    return char;
  }

  decrypt(char) {
    let i = null;
    for (let key in letters) {
      i = letters[key].indexOf(char) - 1 !== -1 ? letters[key].indexOf(char) - 1 : letters[key].length - 1;
      return letters[key][i];
    }

    return char;
  }
}

module.exports = CaeserCipher;
