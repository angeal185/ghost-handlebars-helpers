/**
* {{js}}
* => {{js name="scripts" val="async"}}
**/

var hbs = require('express-hbs'),
config = require('../../config'),
settings = require(config.paths.settingPath),
generateAssetHash = require('../../utils/asset-hash');

js = function (options){
	options.hash = options.hash || {};

//defaults
var name = options.hash.name || 'scripts'; //file path and/or name eg. 'scripts' or 'prod/scripts'
var val = options.hash.val || '';   // 'defer' 'async' "id='1'"

if (settings.assetHash === true) {
	config.set({assetHash: generateAssetHash()});
	
	var script = '<script type="text/javascript" src="/assets/js/' + name + '.min.js?v=' + config.assetHash + '" '+ val +'></script>';
	} else {
	var script = '<script type="text/javascript" src="/assets/js/' + name + '.min.js" '+ val +'></script>';
}


	return new hbs.SafeString(script);

}

module.exports = js;