/**
* {{xcss}}
* => {{xcss url="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}}
**/

var hbs = require('express-hbs');
var config = require('../../config'),
    generateAssetHash = require('../../utils/asset-hash');

xcss = function (options) {
	options.hash = options.hash || {};

//defaults
//var type = options.hash.type || 'text/css'; optionally add || type="' + type + '"
var rel = options.hash.rel || 'stylesheet'; 
var url = options.hash.url || ''; // external url

var link = '<link rel="' + rel + '" href="//' + url + '">';

return new hbs.SafeString(link);

}

module.exports = xcss;
