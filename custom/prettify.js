/**
 * {{prettify}}
 *
 *
 *
 *
 */


var hbs = require('express-hbs');
var _ = require('lodash');
var prettifyHTML = require('js-beautify').html;

// Local utils.
var defaults = require('./utils/config');



condense = function(str) {
  return str.replace(/(\n|\r){2,}/g, '\n');
};
//
padcomments = function(str) {
  return str.replace(/(\s*(?:<!--|\/\*)\s*)(?:(?!.+(\s*(?:<!--|\/\*)\s*)))/g, '\n$1');
};

fixspaces = function(str) {
  return str.replace(/(<\/(a|span|strong|h1|h2|h3|h4|h5|h6)>(?!(,|\.|!|\?|;|:)))/g, '$1 ');
}; 


prettify = function(options) {
	var opts = options || {};
	opts.prettify = opts.prettify || {};
    options = options || {};
    var hash = options.hash || {};

    // Pass an object to the hash. E.g: `{{#prettify opts=foo}}
    hash.opts = hash.opts || {};

    // Define the mode in which to run prettify: 'html', 'css' or 'js'
    var mode = hash.mode || 'html';
    if(mode === 'css' || mode === 'js') {
      opts.prettify = opts.prettify[mode] || {};
    }

    // Extend options
    options = _.extend(options, defaults[mode], opts.prettify, hash, hash.opts);
    var content = options.fn(this);

    // Alias for indent_size
    options.indent_size = options.indent;

    // Run js-beautify before cleaning up newlines below.
    content = require('js-beautify')[mode](content, options);

    // Clean up newlines, spacing
    if(options.condense === true || options.condense === 'true') {
      content = condense(content);
    }
    if(options.padcomments === true || options.padcomments === 'true') {
      content = padcomments(content);
    }
    if (mode === 'html') {
      if(options.fixspaces === true || options.fixspaces === 'true') {
        content = fixspaces(content);
      }
    }
    return new hbs.SafeString(content);
};

module.exports = prettify;

