/**
* {{fbPost}}
* => {{fbPost url="20531316728/posts/10154009990506729" width="500"}}
*/
var hbs = require('express-hbs');   
   
fbPost = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var url = options.hash.color || '20531316728/posts/10154009990506729/'; //facebook post address
var width = options.hash.width || 'width'; // post width

var spost = '<div class="fb-post" data-href="https://www.facebook.com/' + url + '" data-width="' + width + '"></div>';
return new hbs.SafeString(spost);
};

module.exports = fbPost;

//<div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>