/**
 * Return true if `value` is an object.
 *
 * ```handlebars
 * {{isObject "foo"}}
 * //=> false
 * ```
 * @name .isObject
 * @param  {String} `value`
 * @return {Boolean}
 * @api public
 */
var utils = require('./utils/utils');

isObject = function(value) {
  return value && typeof value === 'object'
    && !Array.isArray(value);
};

module.exports = isObject;