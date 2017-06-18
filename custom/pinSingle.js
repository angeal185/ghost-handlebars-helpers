/**
* {{pinSingle}}
* => {{pinSingle url="99360735500167749" width="medium"}}
*/
var hbs = require('express-hbs');   
   
pinSingle = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var url = options.hash.color || '99360735500167749'; //url of single pin
var width = options.hash.width || ''; // '' 'medium' 'large'
var desc = options.hash.desc || ''; // hide description  'true' 'false' --default = false--

var pin = '<a data-pin-do="embedPin" data-pin-width="' + width + '" data-pin-terse="' + desc + '" href="https://www.pinterest.com/pin/' + url + '/"></a>';
return new hbs.SafeString(pin);
};

module.exports = pinSingle;
