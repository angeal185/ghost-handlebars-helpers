var hbs = require('express-hbs');
var path = require('path');
var utils = require('./utils/utils');
//download-link helper
download = function(filepath) {
	return new hbs.SafeString('<a href="' + filepath +'" download="' + path.basename(filepath) + '" >'+ path.basename(filepath, path.extname(filepath)) +'</a>');
	};

module.exports = download;