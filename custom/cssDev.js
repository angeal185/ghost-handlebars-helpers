/**
* {{cssDev}}
* => {{cssDev name="styles"}}
**/

var hbs = require('express-hbs'),
config = require('../../config'),
settings = require(config.paths.settingPath),
generateAssetHash = require('../../utils/asset-hash');

cssDev = function (options) {
	options.hash = options.hash || {};

//defaults
var name = options.hash.name || 'styles'; //file path and/or name eg. styles / prod/styles
var rel = options.hash.rel || 'stylesheet'; 


if (settings.assetHash === true) {
	config.set({assetHash: generateAssetHash()});
	
	var link = '<link type="text/css" rel="' + rel + '" href="/dev/css/' + name + '.css?v=' + config.assetHash + '">';
	} else {
	var link = '<link type="text/css" rel="' + rel + '" href="/dev/css/' + name + '.css">';
}

return new hbs.SafeString(link);

}

module.exports = cssDev;
