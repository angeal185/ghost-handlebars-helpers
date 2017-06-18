/**
 * {{datetime}}
 *
 * //used to output current date with callendar
 *
 */

var moment = require('moment');

//default
datetime = function(date) {
    date = date || moment();
    return moment(date).format('YYYY-MM-DD');
  };


module.exports = datetime