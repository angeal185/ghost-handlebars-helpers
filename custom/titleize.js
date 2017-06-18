/**
 * Title case the given string.
 *
 * {{titleize "this is title case"}}
 * //=> 'This Is Title Case'
 */

var utils = require('./utils/index');
var capitalize = require('./capitalize');

titleize = function(str) {
  if (str && typeof str === 'string') {
    var title = str.replace(/[ \-_]+/g, ' ');
    var words = title.match(/\w+/g);
    var len = words.length;
    var res = [];
    var i = 0;
    while (len--) {
      var word = words[i++];
      res.push(capitalize(word));
    }
    return res.join(' ');
  }
};

module.exports = titleize;