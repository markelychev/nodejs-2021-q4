const showErr = require ('./helpers/showErr');

const optionsName = new Map([
  ['-c --config', null],
  ['-i --input', null],
  ['-o --output', null]
])

const checkRepeat = (flagsStr, argsArr) => {
  const arrFlags = flagsStr.split(' ');
  const repats = arrFlags.reduce((sum, el) => {
      return sum + argsArr.filter(item => item === el).length
    }, 0)
  return repats>1
}

const parseConfig = () => {
  let cliVal = process.argv.slice(2);
  for (let key of optionsName.keys()) {
    if (checkRepeat(key, cliVal)) {
      showErr(`Повторяющейся параметр ${key}`, 9);
    }
    const arrKeys = key.split(' ');
    arrKeys.forEach(flag => {
      const flagIndex = cliVal.indexOf(flag);
      if(flagIndex !== -1) {
        optionsName.set(key, cliVal[flagIndex + 1]);
      }  
    })
  }
  return optionsName
}

module.exports = parseConfig();