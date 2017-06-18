/**
 * {{datetime}}
 *
 * //used to for calendar demo
 *
 */

var moment = require('moment');

datetime = function(date) {
    date = date || moment();
    return moment(date).format('YYYY-MM');
  };


module.exports = datetime