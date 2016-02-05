var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('port', 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, public)));

app.listen(app.get('port'), function(){
	console.log('Listening on port ' + app.get('port'));
});