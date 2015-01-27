module.exports = function(exampleService) {

	return {
		example: function(req, res, next) {
		    exampleService.example(function(err, result) {
		    	res.send(result);
		    });
		}
	};
};