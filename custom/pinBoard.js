/**
* {{pinBoard}}
* => {{pinBoard url="pinterest/official-news" width="400" scaleWidth="80" scaleHeight="240"}}
*/
var hbs = require('express-hbs');   
   
pinBoard = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var url = options.hash.color || 'pinterest/official-news'; //url of single pin
var width = options.hash.width || '400'; // board width
var scaleWidth = options.hash.scaleWidth || '80'; // scale width
var scaleHeight = options.hash.scaleHeight || '240'; // scale height

var board = '<a data-pin-do="embedBoard" data-pin-board-width="' + width + '" data-pin-scale-height="' + scaleHeight + '" data-pin-scale-width="' + scaleWidth + '" href="https://www.pinterest.com/' + url + '/"></a>';
return new hbs.SafeString(board);
};

module.exports = pinBoard;