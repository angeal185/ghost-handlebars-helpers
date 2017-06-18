/**
* {{jsDev}}   --js development file helper
* => {{jsDev name="script" val="async"}}
**/

var hbs = require('express-hbs'),
config = require('../../config'),
settings = require(config.paths.settingPath),
generateAssetHash = require('../../utils/asset-hash');

js = function (options) {
	options.hash = options.hash || {};

//defaults
var name = options.hash.name || 'scripts'; //file path and/or name eg. 'scripts' or 'prod/scripts'
var val = options.hash.val || '';   // 'defer' 'async'

if (settings.assetHash === true) {
	config.set({assetHash: generateAssetHash()});
	
	var script = '<script type="text/javascript" src="/dev/js/' + name + '.js?v=' + config.assetHash + '" '+ val +'></script>';
	} else {
	var script = '<script type="text/javascript" src="/dev/js/' + name + '.js" '+ val +'></script>';
}

return new hbs.SafeString(script);

}

module.exports = js;