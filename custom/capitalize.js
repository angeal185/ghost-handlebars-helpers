/**
 * Capitalize the first word in a sentence.
 *
 * ```handlebars
 * {{capitalize "foo bar baz"}}
 * //=> "Foo bar baz"
 * ```
 */

var utils = require('./utils/index');

capitalize = function(str) {
  if (str && typeof str === 'string') {
    return str.charAt(0).toUpperCase()
      + str.slice(1);
  }
};

module.exports = capitalize;