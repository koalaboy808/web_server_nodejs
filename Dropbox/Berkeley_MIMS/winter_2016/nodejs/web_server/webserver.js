var express = require('express');
var app = express();
var PORT = 3000;

// NEED TO COMMENT OUT THIS APP.GET TO ALLOW THE INDEX FILE IN PUBLIC TO BE USED AS DEFAULT
// app.get('/', function(req, res) {
// 	res.send("express world");
// });

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next) {
		console.log('this is the req.method/urloriginal output: ' + Date() + " " + req.method + " " + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send("about the express world");
});

// console.log(__dirname);

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log("Express started on server" + PORT + "!");
});

