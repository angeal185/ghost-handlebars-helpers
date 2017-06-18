/**
* {{table}}
* => {{table node}}
*/
var hbs = require('express-hbs');   

table = function(data) {
  var str = '<table>';
  for (var i = 0; i < data.length; i++ ) {
    str += '<tr>';
    for (var key in data[i]) {
      str += '<td>' + data[i][key] + '</td>';
    };
    str += '</tr>';
  };
  str += '</table>';

  return new hbs.SafeString (str);
};

module.exports = table;

/*
example:

{
  node:[
    {name: 'express', url: 'http://expressjs.com/'},
    {name: 'hapi', url: 'http://spumko.github.io/'},
    {name: 'compound', url: 'http://compoundjs.com/'},
    {name: 'derby', url: 'http://derbyjs.com/'}
   ]
}

output:

<table>
    <tr>
        <td>express</td>
        <td>http://expressjs.com/
    </td>
    </tr>
        <tr><td>hapi</td>
    <td>http://spumko.github.io/
    </td>
    </tr>
    <tr>
        <td>compound</td>
        <td>http://compoundjs.com/
    </td>
    </tr>
    <tr>
        <td>derby</td>
        <td>http://derbyjs.com/</td>
    </tr>
</table>

*/