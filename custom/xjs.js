/**
* {{xjs}}
* => {{xjs url="scripts.min" val="async"}}
**/

var hbs = require('express-hbs');
var config = require('../../config');


xjs = function (options){
	options.hash = options.hash || {};

	//defaults
	var url = options.hash.url || ''; //file url 
	var val = options.hash.val || '';   // 'defer' 'async' "id='1'"
	var type = options.hash.type || 'text/javascript';

	var script = '<script src="//' + url + '" type="' + type + '" '+ val +'></script>';

	return new hbs.SafeString(script);

}

module.exports = xjs;
