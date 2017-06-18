/**
*materialize Responsive blockquote helper
*
* {{bq}}
* => {{bq text="......."}}
*/
var hbs = require('express-hbs');   
   
bq = function (options) {
options.hash = options.hash || {};

// Defaults
var text = options.hash.text || ''; //text

var item = '<blockquote class="flow-text">' + text + '</blockquote>';
return new hbs.SafeString(item);
};

module.exports = bq;


