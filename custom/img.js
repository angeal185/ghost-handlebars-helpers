/**
* {{img}}
* => {{img name="image.jpg" alt="image123.jpg"}}
**/

var hbs = require('express-hbs'),
config = require('../../config'),
settings = require(config.paths.settingPath),
generateAssetHash = require('../../utils/asset-hash');

img = function (options){
	options.hash = options.hash || {};

	//defaults
	var cls = options.hash.cls || 'responsive-img'; // image class
	var name = options.hash.name || ''; // image name
	var alt = options.hash.alt || '';   //alt url
	
if (settings.assetHash === true) {
	config.set({assetHash: generateAssetHash()});
	
	var IMG = '<img class="' + cls + '" src="/assets/img/' + name + '?v=' + config.assetHash + '" alt="' + alt + '">';
	} else {
	var IMG = '<img class="' + cls + '" src="/assets/img/' + name + '" alt="' + alt + '">';
}

	return new hbs.SafeString(IMG);
};

module.exports = img;