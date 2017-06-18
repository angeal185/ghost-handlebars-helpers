/**
 * Embed a GitHub Gist using only the id of the Gist
 *
 * ```handlebars
 * {{gist "12345"}}
 * ```
 * @param  {String} `id`
 * @return {String}
 * @api public
 */
var utils = require('./utils');
 
gist = function(id) {
  return utils.tag('script', {src: 'https://gist.github.com/' + id + '.js'});
};

module.exports = gist;