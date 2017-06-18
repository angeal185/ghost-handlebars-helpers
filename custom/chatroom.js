/**
   * {{chatroom}}
   * => {{chatroom id="11340988" handle="3c5cf497"}}
   */
var hbs = require('express-hbs');

chatroom = function (options) {
options.hash = options.hash || {};

// Defaults
var id = options.hash.id || 'cid0020000155526436576'; // id
var handle = options.hash.handle || 'dfghdfgdfgdfgdfgd'; //generate at http://www.flickrbadge.com/
var width = options.hash.width || '800'; // width
var height = options.hash.height || '500'; // width

var chat = '<div class="card chatroom-card"><script id="' + id +'" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width:' + width +  'px;height: ' + height +'px;">{"handle":"' + handle +  '","arch":"js","styles":{"a":"ffffcc","c":"FFFFFF","d":"FFFFFF","f":70,"i":70,"k":"383838","l":"ffffff","m":"383838","n":"FFFFFF","o":70,"p":"10","q":"ffffff","t":0,"usricon":0,"surl":0}}</script></div>';

return new hbs.SafeString(chat);
};

module.exports = chatroom;