var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var app = express();

////////// middleware //////////
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// serve up static routes from the client folder
app.use(express.static(__dirname + '/../client'));

////////// routes //////////
require('./routes.js')(app);

////////// socket.io //////////
require('./socketIOController.js')(io);

////////// listen //////////
var port = process.env.PORT || 3000;
http.listen(port, function() {
	console.log('Listening on port:', port);
});
