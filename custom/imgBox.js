/**
*materialize materialboxed img helper
*
* {{imgBox}}
* => {{imgBox text="your text" url="your/url" width="250"}}
*/
var hbs = require('express-hbs');   
   
imgBox = function (options) {
options.hash = options.hash || {};

// Defaults
var text = options.hash.text || ''; //caption text
var width = options.hash.width || ''; //img width
var url = options.hash.url || ''; //img url

var materialboxed = '<img class="materialboxed" data-caption="' + text + '" width="' + width + '" src="' + url + '">';
return new hbs.SafeString(materialboxed);
};

module.exports = imgBox;


