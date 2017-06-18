//{{hyphenate "foo bar baz qux"}}
//=> "foo-bar-baz-qux"

var utils = require('./utils/index');

hyphenate = function(str) {
  if (str && typeof str === 'string') {
    return str.split(' ').join('-');
  }
};

module.exports = hyphenate;