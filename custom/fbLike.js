/**
* {{fbLike}}
* => {{fbLike url="your-site-url" layout="button" size="large" action="recommend"}}
*/
var hbs = require('express-hbs');   
   
fbLike = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var url = options.hash.color || 'add-your-site-name-here'; //url of site
var layout = options.hash.layout || 'button'; // 'button' 'standatd' 'button_count' 'box_count' 
var size = options.hash.size || 'large'; // 'large' 'small'
var action = options.hash.action || 'recommend'; // 'recommend' / 'like'
var faces = options.hash.faces || 'true'; // show faces
var share = options.hash.share || 'true'; // show share

var board = '<div class="fb-like" data-href="' + url + '" data-layout="' + layout + '" data-action="' + action + '" data-size="' + size + '" data-show-faces="' + faces + '" data-share="' + share + '"></div>';
return new hbs.SafeString(board);
};

module.exports = fbLike;