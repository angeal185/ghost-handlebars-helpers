/**
   * {{fixedBtn}}
   * => {{fixedBtn type="btn-class" color="red" icon="chevron-down"}}
   */
var hbs = require('express-hbs');   
   
fixedBtn = function (options) {
options = options || {};
options.hash = options.hash || {};

// Defaults
var type = options.hash.type || 'scrolltop';
var color = options.hash.color || 'light-blue';
var icon = options.hash.icon || 'chevron-up';

var btn = '<div class="fixed-action-btn hvr-buzz ' + type + '"><a class="btn-floating btn-large ' + color + ' waves-effect scroll"><i class="fa fa-' + icon + '"></i></a></div>';

return new hbs.SafeString(btn);
};

module.exports = fixedBtn;

