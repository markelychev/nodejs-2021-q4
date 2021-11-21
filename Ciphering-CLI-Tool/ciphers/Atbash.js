const { Transform } = require('stream');
const letters = require('../configApp/letters');

class Atbash extends Transform {
  constructor(options = {}) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    chunk = chunk
      .toString()
      .split('')
      .map((char) => {
        return this.encode(char);
      })
      .join('');
    this.push(chunk);
    callback();
  }

  encode(char) {
    for (let key in letters) {
      if (letters[key].indexOf(char) !== -1) {
        const charsArr = [...letters[key]].reverse();
        return charsArr[letters[key].indexOf(char)];
      }
    }
    return char;
  }
}

module.exports = Atbash;
