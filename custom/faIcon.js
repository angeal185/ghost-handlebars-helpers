/**
*materialize icon helper
*
* {{faIcon}}
* => {{faIcon url="your/url" icon="cog"}}
*/
var hbs = require('express-hbs');   
   
faIcon = function (options) {
options.hash = options.hash || {};

// Defaults
var url = options.hash.url || ''; //url
var icon = options.hash.icon || ''; //icon name
var animation = options.hash.animation || 'hvr-shrink'; //animation name

var icn = '<a href="' + url + ' " class="' + animation + '"><i class="fa fa-' + icon + '"></i></a>';
return new hbs.SafeString(icn);
};

module.exports = faIcon;


