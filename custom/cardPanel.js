/**
*materialize cardPanel helper
*
* {{cardPanel}}
* => {{cardPanel background="teal"}}
*/
var hbs = require('express-hbs');   
   
cardPanel = function (options) {
options.hash = options.hash || {};

// Defaults
var text = options.hash.text || ''; //text
var background = options.hash.background || 'light-blue'; //background color
var color = options.hash.color || 'white'; //text color
var animation = options.hash.animation || 'hvr-shrink'; //animation class

var item = '<div class="card-panel ' + background + ' ' + animation + '"><span class="' + color + '-text">' + text + '</span></div>';
return new hbs.SafeString(item);
};

module.exports = cardPanel;


