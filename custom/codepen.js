/**
* {{codepen}}
		
* => {{codepen user="angeal185" slug="WRgNBJ"}} ...
*/
var hbs = require('express-hbs');   
   
codepen = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var slug = options.hash.slug || 'WRgNBJ'; //slug id
var user = options.hash.user || 'angeal185'; // user
var width = options.hash.width || '640'; // width
var height = options.hash.height || '265'; // height
var color = options.hash.color || 'dark'; //theme 'light' 'dark'
var title = options.hash.title || ''; // automatic. but can optionally add title 
var layout = options.hash.layout || 'top'; // 'left' 'right' 'top' 

var pen = '<p data-height="' + height + '" data-theme-id="' + color + '" data-slug-hash="' + slug + '" data-default-tab="js,result" data-user="' + user + '" data-embed-version="2" data-pen-title="' + title + '" class="codepen">See the Pen <a href="http://codepen.io/' + user + '/pen/' + slug + '/' + layout + '">blood cell animated canvas</a> by Angeal (<a href="http://codepen.io/' + user + '">@' + user + '</a>) on <a href="http://codepen.io">CodePen</a>.</p>';

return new hbs.SafeString(pen);
};

module.exports = codepen;

//requires <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script> once in page.