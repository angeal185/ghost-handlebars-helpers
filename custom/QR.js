/*
 * {{QR}}
 * {{QR url="page-url" size="1000x1000"}}
 */
var hbs = require('express-hbs'); 


QR = function (options) {
options.hash = options.hash || {};

var size = options.hash.size || '120x120';
var url = options.hash.url || '';

var qrcode = '<img src="https://chart.googleapis.com/chart?chs=' + size + '&cht=qr&choe=UTF-8&chld=L|0&chl=' + url + '" target="_blank" title="Show QR Code"></img>';

return new hbs.SafeString(qrcode);
}

module.exports = QR;