module.exports = (message, errCode) => {
  process.stderr.write(message);
  process.exit(errCode);
}