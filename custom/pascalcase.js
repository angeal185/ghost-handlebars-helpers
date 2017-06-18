var utils = require('./utils/index');

pascalcase = function(str) {
  str = utils.changecase(str, function(ch) {
    return ch.toUpperCase();
  });
  return str.charAt(0).toUpperCase()
    + str.slice(1);
};

module.exports = pascalcase;