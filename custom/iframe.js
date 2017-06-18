/**
*materialize Responsive iframe helper
*
* {{iframe}}
* => {{iframe url="iframe/url"}}
*/
var hbs = require('express-hbs');   
   
iframe = function (options) {
options.hash = options.hash || {};

// Defaults
var url = options.hash.url || ''; //url of video
var width = options.hash.width || '853';
var height = options.hash.height || '480';

var item = '<div class="video-container"><iframe width="' + width + '" height="' + height + '" src="' + url + '" frameborder="0" allowfullscreen></iframe></div>';
return new hbs.SafeString(item);
};

module.exports = iframe;


