/**
 * {{titleize "this is title case"}}
 * //=> 'THIS IS THE TITLE CASE'
 */

var utils = require('./utils');
 
upper = function(str, options) {
  if (str && typeof str === 'string') {
    return str.toUpperCase();
  } else {
    options = str;
  }
  if (typeof options === 'object' && options.fn) {
    return options.fn(this).toUpperCase();
  }
  return '';
};

module.exports = upper;