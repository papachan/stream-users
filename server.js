
var static = require('node-static');

var http = require('http');

var file = new (static.Server)('./content');

var server = http.createServer(function(request, response){
	request.addListener('end', function(){
		file.serve(request, response);
	});
});

server.listen(3000);

io = require('socket.io').listen(server)
