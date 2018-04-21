var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 3000

app.get('/',function(req, res){
	res.sendFile(__dirname + '/startpage.html');
});

app.get('/public/css/style.css', function (req, res) {
  res.sendFile(__dirname + '/public/css/style.css');
});

app.get('/startpage', function (req, res) {
  res.sendFile(__dirname + '/startpage.html');
});

app.get('/login.js', function (req, res) {
  res.sendFile(__dirname + '/login.js');
});

app.get('/chat',function(req, res){
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', function(socket){
  console.log('a user connected');
    socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(port,function(){
	console.log('listening on port:' + port);
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});