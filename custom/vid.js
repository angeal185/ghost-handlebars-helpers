/**
*materialize Responsive Videos helper
*
* {{vid}}
* => {{vid url="vid/url" val="autoplay controls loop preload" type="webm"}}
*/
var hbs = require('express-hbs');   
   
vid = function (options) {
options.hash = options.hash || {};

// Defaults
var val = options.hash.val || 'controls'; // autoplay controls loop preload muted
var url = options.hash.url || ''; //url of video
var type = options.hash.type || 'mp4'; // mp4 / ogg / webm

var video = '<video class="responsive-video" ' + val + '><source src="' + url + '" type="video/' + type + '"></video>';
return new hbs.SafeString(video);
};

module.exports = vid;


