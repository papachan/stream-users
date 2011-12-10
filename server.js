
var static = require('node-static'), 
    twitter = require('ntwitter'),
    http = require('http');

var file = new (static.Server)('./content');

var server = http.createServer(function(request, response){
	request.addListener('end', function(){
		file.serve(request, response);
	});
});

var twit = new twitter(require('./keys'));
    twit.verifyCredentials(function( error, data){
	// console.log(data);
})
.search('node.js',function(error, data){
	console.log(data);
});

 
server.listen(3000);

io = require('socket.io').listen(server)
