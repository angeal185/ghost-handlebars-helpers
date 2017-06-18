/*
 *{{#repeat count=10 start=17}}
 *	<h1>{{@index}}</h1>,
 *{{else}}
 *	  Not working
 *{{/repeat}}
 *
 * = 17,18,19,20,21,22,23,24,25,26
 * 
 */
 
var isNumber = require('is-number');
var merge = require('mixin-deep');

repeat = function(n, options) {
  var isNum = isNumber(n);

  if (!isNum) {
    options = n;
    n = 0;
  }

  options = options || {};
  var opts = merge({count: n}, options, options.hash);
  var ctx = this.context
    ? merge({}, this.context, opts)
    : merge({}, this, opts);

  if (opts.count) {
    return block(ctx);
  }

  return options.inverse(ctx);
};

function block(options) {
  var max = options.count;
  var str = '';

  var start = options.start || 0;

  for (var i = start; i < (max + start); i++) {
    var data = merge({index: i}, options);
    str += options.fn(options, {data: data});
  }
  return str;
}

module.exports = repeat;