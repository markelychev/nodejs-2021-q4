const fs = require('fs');

const optionsName = new Map([
  ['-c --config', null],
  ['-i --input', null],
  ['-o --output', null],
]);

const checkRepeat = (flagsStr, argsArr) => {
  const arrFlags = flagsStr.split(' ');
  const repats = arrFlags.reduce((sum, el) => {
    return sum + argsArr.filter((item) => item === el).length;
  }, 0);
  return repats > 1;
};

const parseConfig = (config = process.argv) => {
  let cliVal = config.slice(2);
  for (let key of optionsName.keys()) {
    if (checkRepeat(key, cliVal)) {
      throw new Error(`Повторяющейся параметр ${key}`);
    }
    const arrKeys = key.split(' ');
    arrKeys.forEach((flag) => {
      const flagIndex = cliVal.indexOf(flag);
      if (flagIndex !== -1) {
        optionsName.set(key, cliVal[flagIndex + 1]);
      }
    });
  }
  if (!optionsName.get('-c --config')) {
    throw new Error(`Doesn't pass -c or --config argument`);
  }

  if (optionsName.get('-i --input')) {
    if (!fs.existsSync(optionsName.get('-i --input'))) {
      throw new Error('Input file is not available');
    }
  }

  if (optionsName.get('-o --output')) {
    if (!fs.existsSync(optionsName.get('-o --output'))) {
      throw new Error('Output file is not available');
    }
  }
  return optionsName;
};

module.exports = parseConfig;
