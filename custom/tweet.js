/**
* {{tweet}}
* => {{tweet}}
*/
var hbs = require('express-hbs');

tweet = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var size = options.hash.size || ''; //large

var btn = '<a href="https://twitter.com/share" class="twitter-share-button light-blue waves-effect waves-light" data-size="' + size + '"><i class="material-icons left fa fa-twitter"></i>Tweet</a>';
return new hbs.SafeString(btn);
};

module.exports = tweet;
