/**
* Get the "stem" from the given `filepath`.
*
* ```handlebars
* {{stem "docs/toc.md"}}
* //=> 'toc'
* ```
* @param {String} `filepath`
* @return {String}
* @api public
*/

var path = require('path');


stem = function(filepath) {
return path.basename(filepath, path.extname(filepath));
};

module.exports = stem;