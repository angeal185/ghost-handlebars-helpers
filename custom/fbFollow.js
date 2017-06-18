/**
* {{fbFollow}}
* => {{fbFollow url="fb-user-link" layout="button" size="large" faces="true"}}
*/
var hbs = require('express-hbs');   
   
fbFollow = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var url = options.hash.url || 'zuck'; //facebook name
var layout = options.hash.layout || 'button'; // 'button' 'standatd' 'button_count' 'box_count' 
var size = options.hash.size || 'large'; // 'large' 'small'
var faces = options.hash.faces || 'true'; // show faces

var board = '<div class="fb-follow" data-href="https://www.facebook.com/' + url + '" data-layout="' + layout + '" data-size="' + size + '" data-show-faces="' + faces + '"></div>';
return new hbs.SafeString(board);
};

module.exports = fbFollow;