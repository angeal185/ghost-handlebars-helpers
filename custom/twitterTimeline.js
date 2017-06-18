/**
   * {{twitterTimeline}}
   * => {{twitterTimeline url="TwitterDev/timelines/539487832448843776" height="600" width="300" limit="5"}}
   */
var hbs = require('express-hbs');   
   
twitterTimeline = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var user = options.hash.user || 'Angeal185'; // user
var url = options.hash.url || 'TwitterDev/timelines/539487832448843776'; //generate at https://publish.twitter.com/add-your-generated-code
var width = options.hash.width || '';  //add width
var height = options.hash.height || '';  // add height
var limit = options.hash.limit || '5';	// tweet limit
var chrome = options.hash.chrome || '';  // "noheader nofooter noborders noscrollbar transparent"
var aria = options.hash.aria || 'polite ';  // assertive or polite 

var btn = '<a class="twitter-timeline" href="//twitter.com/' + url + '" data-width="' + width + '" data-height="' + height + '" data-chrome="' + chrome + '" data-tweet-limit="' + limit + '" data-aria-polite="' + aria + '">Follow @' + user + '</a>';
return new hbs.SafeString(btn);
};

module.exports = twitterTimeline;