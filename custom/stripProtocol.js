var url = require('url');

stripProtocol = function(str) {
  var parsed = url.parse(str);
  delete parsed.protocol;
  return parsed.format();
};

module.exports = stripProtocol;