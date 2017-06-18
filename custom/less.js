/**
* {{less}}
* => {{less name="styles"}} 
*/

var hbs = require('express-hbs');
var config = require('../../config'),
    generateAssetHash = require('../../utils/asset-hash');

less = function (options) {
options.hash = options.hash || {};

//defaults
var name = options.hash.name || 'styles'; //file path and/or name eg. styles / prod/styles
var rel = options.hash.rel || 'stylesheet/less'; 

if (!config.assetHash) {
	config.set({assetHash: generateAssetHash()});
}

var link = '<link type="text/css" rel="' + rel + '" href="/assets/less/' + name + '.less?v=' + config.assetHash + '">';

return new hbs.SafeString(link);
}

module.exports = less;