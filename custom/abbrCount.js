/**
 * Capitalize all words in a string.
 *
 * ```handlebars
 * {{abbrCount 4000}}
 * //=> "4k+"
 * ```
 * @param  {String} `str`
 * @return {String}
 * @api public
 */


abbrCount = function  (val) {
    var count       = parseInt(val, 10);
    var countString = val + '';
    var symbol      = '';

    if (count >= 1000) {
        symbol = 'k+';
        return countString.substring(0, 1) + symbol;
    }

    return countString;
};

module.exports = abbrCount