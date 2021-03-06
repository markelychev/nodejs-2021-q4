const { pipeline } = require('stream');
const { stdin, stdout } = require('process');
const WriteStream = require('./WriteStream/WriteStream');
const options = require('./parseConfig');
const ciphers = require('./ciphers/ciphers');
const ReadStream = require('./ReadStream/ReadStream');

let streams = [];

const createLine = (options) => {
  const MAX_CONF_ITEM_LENGTH = 2;
  const config = options.get('-c --config').split('-');

  return config.map((item) => {
    if (ciphers[item[0]] == undefined || item.length > MAX_CONF_ITEM_LENGTH) {
      throw new Error('Config Error');
    }
    if (item[0] === 'A') {
      if (item.length > 1) throw new Error('Config Error');
      return new ciphers[item[0]]();
    }
    return new ciphers[item[0]](+item[1]);
  });
};

try {
  const rStream = options.get('-i --input') ? new ReadStream(options.get('-i --input')) : stdin;
  const wStream = options.get('-o --output') ? new WriteStream(options.get('-o --output')) : stdout;
  streams.push(rStream);
  streams = streams.concat(createLine(options));
  streams.push(wStream);
} catch (err) {
  process.stderr.write(err.message);
  process.exit();
}

pipeline(...streams, (err) => {
  if (err) {
    console.error('Pipeline failed.', err.message);
  } else {
    console.log('Pipeline succeeded.');
  }
});
