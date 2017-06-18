/**
 * Add commas to numbers
 *
 * @param {Number} `num`
 * @return {Number}
 * @api public
 *
 *	{{commas 23450000}}
 *	23,450,000
 */

commas = function(num) {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

module.exports = commas;