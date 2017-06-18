/**
* {{snipjs}}
* => {{snipjs}}
**/

var hbs = require('express-hbs');
var config = require('../../config');

snipjs = function (options){
	options.hash = options.hash || {};

	//defaults
	var url = options.hash.url || 'https://cdn.snipcart.com/scripts/2.0/snipcart.js'; //file url 
	var val = options.hash.val || 'snipcart'; //id
	var api = options.hash.api || 'MTIxZmI2YzQtNjM0Ny00ODZjLWJkMGItMjk4YTg2YTQ5OWZlNjM2MjcxOTM1ODc1MTI2MjMy';   // your API key here

	var script = '<script src="' + url + '" id="'+ val +'" data-api-key="'+ api +'"></script>';

	return new hbs.SafeString(script);

}

module.exports = snipjs;


