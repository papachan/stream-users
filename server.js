


var HTTPServer = require('http-server').HTTPServer;

var httpserver = new HTTPServer({
	root: './content'
});

io = require('socket.io').listen(httpserver)
httpserver.start();
