/**
*reddit api widget helper
*insert generated url from https://www.reddit.com/widget/ 
* {{reddit}}
* => {{reddit url=".embed?limit=5"}}
*/
var hbs = require('express-hbs');   
   
reddit = function (options) {
options.hash = options.hash || {};

// Defaults
var url = options.hash.url || '.embed?limit=5';

var item = '<script src="//www.reddit.com/' + url + '" type="text/javascript"></script>';
return new hbs.SafeString(item);
};

module.exports = reddit;