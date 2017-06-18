/**
* {{pinFollow}}
* => {{pinFollow user="angeal185" url="angeal185"}}
*/
var hbs = require('express-hbs');   
   
pinFollow = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var user = options.hash.user || 'angeal185';
var url = options.hash.color || 'angeal185';

var btn = '<a data-pin-do="buttonFollow" href="https://www.pinterest.com/' + url + '">' + user + '</a>';
return new hbs.SafeString(btn);
};

module.exports = pinFollow;

