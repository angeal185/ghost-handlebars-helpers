// {{stringify "context" }}

var hbs = require('express-hbs');

//to json
stringify = function(context) {
  return new hbs.SafeString(JSON.stringify(context));
  };

module.exports = stringify;
