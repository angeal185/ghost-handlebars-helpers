/**
 * Get the relative filepath from `a` to `b`.
 *
 * ```handlebars
 * {{relative a b}}
 * ```
 *
 * @param {String} `a`
 * @param {String} `b`
 * @return {String}
 * @api public
 */

var utils = require('./utils/utils');

relative = function(a, b) {
  return utils.relative(a, b);
};

module.exports = relative;