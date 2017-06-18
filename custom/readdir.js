/**
 * Return an array of files from the given
 * directory.
 *
 * @param {String} `directory`
 * @return {Array}
 * @api public
 */

var fs = require('fs');
var path = require('path');
var utils = require('./utils');
 
readdir = function(dir, filter) {
  var files = fs.readdirSync(dir);
  files = files.map(function(fp) {
    return path.join(dir, fp);
  });
  if (utils.isOptions(filter)) {
    return files;
  }
  if (typeof filter === 'function') {
    return filter(files);
  }
  if (utils.isRegex(filter)) {
    var re = utils.toRegex(filter);
    return files.filter(function(fp) {
      return re.test(fp);
    });
  }
  if (utils.isGlob(filter)) {
    var isMatch = utils.mm.matcher(filter);
    return files.filter(function(fp) {
      return isMatch(fp);
    });
  }
  if (['isFile', 'isDirectory'].indexOf(filter) !== -1) {
    return files.filter(function(fp) {
      var stat = fs.statSync(fp);
      return stat[filter]();
    });
  }
  return files;
};

module.exports = readdir;