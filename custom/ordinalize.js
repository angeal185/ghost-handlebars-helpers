/**
 * Returns an ordinalized number (as a string).
 *
 * ```handlebars
 * {{ordinalize 1}}
 * //=> '1st'
 * {{ordinalize 21}}
 * //=> '21st'
 * {{ordinalize 29}}
 * //=> '29th'
 * {{ordinalize 22}}
 * //=> '22nd'
 * ```
 *
 * @param {String} `val` The value to ordinalize.
 * @return {String} The ordinalized number
 * @api public
 */
var utils = require('./utils/utils');
 
ordinalize = function(val) {
  var num = Math.abs(Math.round(val));
  var res = num % 100;

  if (utils.indexOf([11, 12, 13], res) >= 0) {
    return '' + val + 'th';
  }

  switch (num % 10) {
    case 1:
      return '' + val + 'st';
    case 2:
      return '' + val + 'nd';
    case 3:
      return '' + val + 'rd';
    default: {
      return '' + val + 'th';
    }
  }
};

module.exports =  ordinalize