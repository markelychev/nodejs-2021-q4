const { pipeline } = require('stream');
const { stdin, stdout } = require('process');
const options = require('./parseConfig');
const ciphers = require('./ciphers/ciphers');

let a = [];

const createLine = (options) => {
  const config = options.get('-c --config').split('-');
  return config.map((item) => {
    if (ciphers[item[0]] == undefined) {
      throw new Error('Config Error');
    }
    return new ciphers[item[0]](+item[1]);
  });
};

try {
  a = createLine(options);
} catch (err) {
  process.stderr.write(err.message);
  process.exit();
}

pipeline(stdin, ...a, stdout, (err) => {
  if (err) {
    console.error('Pipeline failed.', err.message);
  } else {
    console.log('Pipeline succeeded.');
  }
});
