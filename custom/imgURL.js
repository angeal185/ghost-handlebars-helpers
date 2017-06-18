/**
* {{img}}
* => {{img name="image.jpg" alt="image123.jpg"}}
**/

var hbs = require('express-hbs'),
config = require('../../config'),
settings = require(config.paths.settingPath),
generateAssetHash = require('../../utils/asset-hash');


	
imgURL = function (options){
	options.hash = options.hash || {};
	//defaults
	var name = options.hash.name || ''; // image name
	
if (settings.assetHash === true) {
	config.set({assetHash: generateAssetHash()});
	
	var IMG = '/assets/img/' + name + '?v=' + config.assetHash;
	} else {
	var IMG = '/assets/img/' + name;
}

	return new hbs.SafeString(IMG);
};

module.exports = imgURL;