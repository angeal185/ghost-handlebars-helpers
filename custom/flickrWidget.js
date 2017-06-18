/**
   * {{flickrWidget}}
   * => {{flickrWidget id="flickr_badge_wrapper" url="badge_code.gne?count=16&display=latest&size=square&nsid=146614435@N04&raw=1"}}
   */
var hbs = require('express-hbs');   
   
flickrWidget = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var id = options.hash.user || 'flickr_badge_wrapper'; // id
var url = options.hash.url || 'badge_code.gne?count=16&display=latest&size=square&nsid=146614435@N04&raw=1'; //generate at http://www.flickrbadge.com/ 

var flkr = '<div id="' + id + '"><script type="text/javascript" src="http://www.flickr.com/' + url + '"></script></div>';
return new hbs.SafeString(flkr);
};

module.exports = flickrWidget;


