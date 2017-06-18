/**
   * {{follow}}
   * => {{follow user="assemblejs"}}
   */
var hbs = require('express-hbs');   
   
twitterFollow = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var user = options.hash.user || 'angeal185';
var color = options.hash.color || '#fff';
var showCount = options.hash.showCount || 'false';
var screenName = options.hash.screenName || 'false';
var size = options.hash.size || '';


var btn = '<a class="twitter-follow-button waves-effect waves-light" href="https://twitter.com/' + user + '" data-link-color="' + color + '" data-show-count="' + showCount + '" data-size="' + size + '" data-show-screen-name="' + screenName + '"><i class="material-icons left fa fa-twitter"></i>Follow @' + user + '</a>';
return new hbs.SafeString(btn);
};

module.exports = twitterFollow;