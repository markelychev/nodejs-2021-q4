const { Writable } = require('stream');
const fs = require('fs');

class WriteStream extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
    if (!fs.existsSync(filename)) {
      throw new Error('Output file is not available');
    }
  }
  _construct(callback) {
    fs.open(this.filename, 'a', (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }
  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

module.exports = WriteStream;
