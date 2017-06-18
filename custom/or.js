var hbs = require('express-hbs');
var isObject = require('./isObject');
var isString = require('./isString');
var utils = require('./utils/utils');

/**
 * Block helper that renders a block if **any of** the given values
 * is truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * ```handlebars
 * {{#or a b c}}
 *   If any value is true this will be rendered.
 * {{/or}}
 * ```
 *
 * @name .or
 * @param {...any} `arguments` Variable number of arguments
 * @param {Object} `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

or = function(/* any, any, ..., options */) {
  var len = arguments.length - 1;
  var options = arguments[len];

  for (var i = 0; i < len; i++) {
    if (arguments[i]) {
      return options.fn(this);
    }
  }

  return options.inverse(this);
};

module.exports = or;