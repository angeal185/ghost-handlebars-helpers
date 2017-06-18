/**
*materialize icon helper
*
* {{mdIcon}}
* => {{mdIcon url="your/url" icon="visibility" size="large"}}
*/
var hbs = require('express-hbs');   
   
mdIcon = function (options) {
options.hash = options.hash || {};

// Defaults
var url = options.hash.url || ''; //url
var size = options.hash.size || ''; //icon size(optional): 'tiny': 1rem, 'small': 2rem, 'medium': 4rem, 'large': 6rem
var icon = options.hash.icon || ''; //icon name
var animation = options.hash.animation || 'hvr-shrink'; //animation name

var icn = '<a href="' + url + ' " class="' + animation + '"><i class="material-icons ' + size + '">' + icon + '</i></a>';
return new hbs.SafeString(icn);
};

module.exports = mdIcon;


