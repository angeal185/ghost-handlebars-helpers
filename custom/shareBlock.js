/**
* {{shareBlock}}
* => {{shareBlock url="site-url" title="page-title"}}
*/
var hbs = require('express-hbs');   
   
shareBlock = function (options) {
options.hash = options.hash || {};

// Defaults
var url = options.hash.url || ''; //Add your site url here
var title = options.hash.title || ''; // Add page-title when using in a template 
//---both url and title must = your current page url each time this is used

var btns = '<div class="share-block"><a class="btn btn-social-icon btn-facebook hvr-shrink" href="https://www.facebook.com/sharer/sharer.php?u=' + url + title +'"><i class="fa fa-facebook"></i></a><a class="btn btn-social-icon btn-google-plus hvr-shrink" href="https://plus.google.com/share?url=' + url + title +'"><i class="fa fa-google-plus"></i></a><a class="btn btn-social-icon btn-linkedin hvr-shrink" href="https://www.linkedin.com/shareArticle?mini=true&url=' + url + title + '=' + title + '"><i class="fa fa-linkedin"></i></a><a class="btn btn-social-icon btn-twitter hvr-shrink" href="https://twitter.com/home?status=' + url + title + '"><i class="fa fa-twitter"></i></a></div>';

return new hbs.SafeString(btns);
};

module.exports = shareBlock;


