var hbs = require('express-hbs');

test = function(object) {

var test = 
{
	"name":"1.js",
	"name":"2.js",
	"name":"3.js"
};

	
	return new hbs.SafeString('<p>'+ object +'</p>');
};

module.exports = test;