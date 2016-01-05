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

module.exports = middleware;