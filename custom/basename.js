/**
 * Get the file extension from the given `filepath`.
 *
 * ```handlebars
 * {{basename "docs/toc.md"}}
 * //=> 'toc.md'
 * ```
 * @param {String} `ext`
 * @return {String}
 * @api public
 */

 
var path = require('path');

basename = function(filepath) {
  return path.basename(filepath);
};

module.exports = basename;