var hbs = require('express-hbs');
var path = require('path');
var utils = require('./utils/utils');

list = function(items, options) {
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li class='hvr-shrink light-blue'>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
};


module.exports = list;