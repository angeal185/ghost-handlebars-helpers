/**
* {{vimeo}}
* => {{vimeo id="vimeoEmbed" url="38108597" width="640" height="360"}} ...
*/
var hbs = require('express-hbs');   
   
vimeo = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var id = options.hash.id || 'vimeoEmbed'; //embed id
var url = options.hash.url || '38108597'; //embed url
var width = options.hash.width || '640'; // width
var height = options.hash.height || '360'; // height
var color = options.hash.color || '#00adef'; //url of embed
var loop = options.hash.loop || 'true'; // loop -- true/false
var title = options.hash.title || 'true'; // display title
var autoplay = options.hash.autoplay || 'false'; 
var autopause = options.hash.autopause || 'false';
var portrait = options.hash.portrait || 'true'; // display image portrait

var vmeo = '<div id="' + id + '" data-vimeo-width="' + width + '" data-vimeo-height="' + height + '" data-vimeo-url="https://player.vimeo.com/video/' + url + '" data-vimeo-color="' + color + '" data-vimeo-loop="' + loop + '" data-vimeo-title="' + title + '" data-vimeo-autoplay="' + autoplay + '" data-vimeo-autopause="' + autopause + '" data-vimeo-portrait="' + portrait + '"></div>';

return new hbs.SafeString(vmeo);

var player = new Vimeo.Player(id, options);

    player.setVolume(0);
	
};

module.exports = vimeo;

