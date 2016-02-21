var hapi = require('hapi');
var vision = require('vision');
var path = require('path');

var server = new hapi.Server();

server.connection({
     host:'localhost',
     port: Number(process.argv[2] || 8080)
});

server.register(vision, function() {});

server.views({
     engines: {
         html:require('handlebars')
     },
     path: path.join(__dirname, '../../../../builds/development/views')
});

server.route({
	method:'GET',
	path:'/',
	handler: {
		view: 'index.html'
	}
});

server.route({
  method:'GET',
  path:'/about',
  handler: {
  	view: 'about.html'
  }
});


server.route({ 
  method:'GET',
  path:'/blog',
  handler: {
  	view: 'blog.html'
  }
});


server.route({
  method:'GET',
  path:'/contacto',
  handler: {
  	view: 'contacto.html'
  }
});

server.start(() =>{
	console.log('Servidor Corriendo');
});



















