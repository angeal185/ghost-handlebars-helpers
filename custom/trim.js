/**
 * Removes extraneous whitespace from the beginning and end
 * of a string.
 *
 * ```js
 * {{trim " ABC "}}
 * //=> 'ABC'
 * ```
 *
 * @name .trim
 * @param  {String} `string` The string to trim.
 * @return {String}
 * @api public
 */

trim = function(str) {
  if (!isString(str)) return '';
  return str.trim();
};

module.exports = trim;