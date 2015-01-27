var express = require('express');
var port = 3000;
var app = express();
var router = express.Router();

var exampleService = require('./node-services/exampleService')();

var controllers = {
	example: require('./node-controllers/exampleController')(exampleService)
};

require('./routes')(router, controllers);

app.use('/', router);

app.listen(port);
console.log('listening on port: ', port);