/**
* {{js}}
* => {{js name="scripts.min" val="async"}} 
*/

var hbs = require('express-hbs');
var config = require('../../config'),

gb = function (globalsPath) {


var globalsPath = config.paths.globalsPath;
var glob = require(globalsPath);

return new hbs.SafeString(glob);

}

module.exports = gb;