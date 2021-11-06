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
