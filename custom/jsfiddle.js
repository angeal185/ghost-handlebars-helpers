/**
* {{jsfiddle}}
*		
* => {{jsfiddle user="angeal185" slug="L0yoa7tw"}} ...
*/
var hbs = require('express-hbs');   
   
jsfiddle = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var slug = options.hash.slug || 'L0yoa7tw'; //slug id
var user = options.hash.user || 'angeal185'; // user
var width = options.hash.width || '100%'; // width
var height = options.hash.height || '300'; // height
var color = options.hash.color || 'dark'; //theme 'light' 'dark'
var layout = options.hash.layout || 'js,html,css,result'; // 'js' 'js,html' 'result' 'js,html,css,result' ...
var frame = options.hash.frame || '0'; 
var fullscreen = options.hash.fullscreen || 'allowfullscreen'; 

var pen = '<iframe width="' + width + '" height="' + height + '" src="//jsfiddle.net/' + user + '/' + slug + '/embedded/' + layout + '/' + color + '" allowfullscreen="' + fullscreen + '" frameborder="' + frame + '"></iframe>';

return new hbs.SafeString(pen);
};

module.exports = jsfiddle;