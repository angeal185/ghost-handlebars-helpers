/**
 * Generate one or more `<script></script>` tags with paths/urls to
 * javascript or coffeescript files.
 *
 * ```handlebars
 * {{js ""}}
 * ```
 *
 * @param  {Object} `context`
 * @return {String}
 * @api public
 */

var hbs = require('express-hbs');
var utils = require('./utils/utils');
var path = require('path');




shareFB = function() {
    return new hbs.SafeString("<a class='btn btn-social-icon btn-facebook hvr-shrink' target='popup' onclick='window.open('https://www.facebook.com/sharer/sharer.php?u=" + path.url + "', 'name','width=600,height=400')'><i class='fa fa-facebook'></i></a>");
};



module.exports = shareFB;