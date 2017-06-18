var utils = require('./utils/index');
var capitalize = require('./capitalize');
capitalizeAll = function(str) {
	if (str && typeof str === 'string') {
		return str.replace(/\w\S*/g, function(word) {
		  return capitalize(word);
		});
	  }
};

module.exports = capitalizeAll;