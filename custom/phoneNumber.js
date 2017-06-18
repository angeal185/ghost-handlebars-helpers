/**
 * Convert a string or number to a formatted phone number.
 *
 * @param  {Number|String} `num` The phone number to format, e.g. `8005551212`
 * @return {Number} Formatted phone number: `(800) 555-1212`
 */

phoneNumber = function(num) {
  num = num.toString();

  return '(' + num.substr(0, 3) + ') '
    + num.substr(3, 3) + '-'
    + num.substr(6, 4);
};

module.exports = phoneNumber;