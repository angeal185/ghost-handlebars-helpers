/**
* {{lnk}}
* => {{lnk lclass="classname" aclass="classname" url="your-site-url" title="anything""}}
*/
var hbs = require('express-hbs');   
   
lnk = function (options) {
options.hash = options.hash || {};

// Defaults
var url = options.hash.url || ''; //url here
var text = options.hash.text || ''; // title here

var link = '<li><a href="' + url + '">' + text + '</a></li>';
return new hbs.SafeString(link);
};

module.exports = lnk;


