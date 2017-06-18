/**
 * Return true if `value` is a string.
 *
 * ```handlebars
 * {{isString "foo"}}
 * //=> 'true'
 * ```
 * @param  {String} `value`
 * @return {Boolean}
 * @api public
 */
var utils = require('./utils/utils');

isString = function(value) {
  return utils.isString(value);
};

module.exports = isString;