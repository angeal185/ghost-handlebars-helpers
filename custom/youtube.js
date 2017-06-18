/**
* {{youtube}}
* => {{youtube id="existing-iframe-example" width="640" height="360" source="M7lc1UVf-VE?enablejsapi=1"}}
*/
var hbs = require('express-hbs');   
   
youtube = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var id = options.hash.id || 'existing-iframe-example'; //iframe id
var width = options.hash.width || '640'; // width
var height = options.hash.height || '360'; // height
var source = options.hash.source || 'M7lc1UVf-VE?enablejsapi=1'; //url of embed
var border = options.hash.border || '0'; // frameborder

var ytube = '<iframe id="' + id + '" width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' + source + '" frameborder="' + border + '"></iframe>';

return new hbs.SafeString(ytube);

if (!window['YT']) {
    var YT = {
        loading: 0,
        loaded: 0
    };
}

if (!window['YTConfig']) {
    var YTConfig = {
        'host': 'http://www.youtube.com'
    };
}

if (!YT.loading) {
    YT.loading = 1;
    (function() {
        var l = [];
        YT.ready = function(f) {
            if (YT.loaded) {
                f();
            } else {
                l.push(f);
            }
        };
        window.onYTReady = function() {
            YT.loaded = 1;
            for (var i = 0; i < l.length; i++) {
                try {
                    l[i]();
                } catch (e) {}
            }
        };
        YT.setConfig = function(c) {
            for (var k in c) {
                if (c.hasOwnProperty(k)) {
                    YTConfig[k] = c[k];
                }
            }
        };
        var a = document.createElement('script');
        a.type = 'text/javascript';
        a.id = 'www-widgetapi-script';
        a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfltcC7GW/www-widgetapi.js';
        a.async = true;
        var b = document.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b);
    })();
}
  

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player(id, {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
  }
  function onPlayerReady(event) {
    document.getElementById(id).style.borderColor = '#FF6D00';
  }
  function changeBorderColor(playerStatus) {
    var color;
    if (playerStatus == -1) {
      color = "#37474F"; // unstarted = gray
    } else if (playerStatus == 0) {
      color = "#FFFF00"; // ended = yellow
    } else if (playerStatus == 1) {
      color = "#33691E"; // playing = green
    } else if (playerStatus == 2) {
      color = "#DD2C00"; // paused = red
    } else if (playerStatus == 3) {
      color = "#AA00FF"; // buffering = purple
    } else if (playerStatus == 5) {
      color = "#FF6DOO"; // video cued = orange
    }
    if (color) {
      document.getElementById(id).style.borderColor = color;
    }
  }
  function onPlayerStateChange(event) {
    changeBorderColor(event.data);
  }
};

module.exports = youtube;