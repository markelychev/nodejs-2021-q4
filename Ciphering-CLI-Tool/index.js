const { pipeline } = require('stream');
const { stdin, stdout } = require('process');
const WriteStream = require('./WriteStream/WriteStream');
const parseConfig = require('./parseConfig');
const ReadStream = require('./ReadStream/ReadStream');
const createStreamsLine = require('./createStreamsLine/createStreamsLine');

let streams = [];

try {
  const options = parseConfig(process.argv);
  const rStream = options.get('-i --input') ? new ReadStream(options.get('-i --input')) : stdin;
  const wStream = options.get('-o --output') ? new WriteStream(options.get('-o --output')) : stdout;
  streams.push(rStream);
  streams = streams.concat(createStreamsLine(options));
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
