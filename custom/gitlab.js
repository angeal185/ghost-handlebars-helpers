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
 
gitlab = function(id) {
  return utils.tag('script', {src: 'https://gitlab.com/snippets/' + id + '.js'});
};

module.exports = gitlab;