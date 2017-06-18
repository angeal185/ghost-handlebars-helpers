/**
*materialize Responsive text helper
*
* {{flow}}
* => {{flow text="......."}}
*/
var hbs = require('express-hbs');   
   
flow = function (options) {
options.hash = options.hash || {};

// Defaults
var text = options.hash.text || ''; //text

var item = '<p class="flow-text">' + text + '</p>';
return new hbs.SafeString(item);
};

module.exports = flow;


