var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
	var string = req.body.str;
	res.end(string.split('').reverse().join(''));
});

app.listen(process.argv[2]);

