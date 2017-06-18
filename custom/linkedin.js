/**
* {{linkedin}}
* => {{linkedin url="your-user-url" layout="button" size="large" action="recommend"}}
* requires <script src="//platform.linkedin.com/in.js" type="text/javascript"></script> to be on page
*/
var hbs = require('express-hbs');   
   
linkedin = function (options) {
options.hash = options.hash || {};

// Defaults
var url = options.hash.color || 'ben-eaves-996991125'; //user-url

var board = '<script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/' + url + '" data-format="inline" data-related="false"></script>';
return new hbs.SafeString(board);
};

module.exports = linkedin;


