/**
* {{lazy}}
* => {{lazy name="styles.min"}} --css development file helper
*/

var hbs = require('express-hbs'),
	config = require('../../config'),
    generateAssetHash = require('../../utils/asset-hash');

lazy = function (options) {
	options.hash = options.hash || {};

//defaults
var cls = options.hash.cls || ''; //file path and/or name eg. styles / prod/styles
var src = options.hash.name || 'http://placehold.it/350x150'; //file path and/or name eg. styles / prod/styles
var width = options.hash.width || '650';
var height = options.hash.height || '280';

if (!config.assetHash) {
	config.set({assetHash: generateAssetHash()});
}

//change file path to dev directory
var link = '<img class="materialboxed ' + cls + '" width="' + width + '" height="' + height + '" data-original="' + src + '">';

return new hbs.SafeString(link);

}

module.exports = lazy;