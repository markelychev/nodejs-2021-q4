const ciphers = require('../ciphers/ciphers');

const createStreamsLine = (options) => {
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

module.exports = createStreamsLine;
