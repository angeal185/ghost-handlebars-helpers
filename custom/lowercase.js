/**
 * Lowercase all characters in the given string.
 *
 * ```handlebars
 * {{lowercase "Foo BAR baZ"}}
 * //=> 'foo bar baz'
 * ```
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

var utils = require('./utils/index');

lowercase = function(str) {
  if (str && typeof str === 'string') {
    return str.toLowerCase();
  }
};

module.exports = lowercase;