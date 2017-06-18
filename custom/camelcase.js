var utils = require('./utils/index');

camelcase = function(str) {
  return utils.changecase(str, function(ch) {
    return ch.toUpperCase();
  });
};

module.exports = camelcase;