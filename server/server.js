var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('canvas-data', (data) => {
        socket.broadcast.emit('canvas-data', data);
    })
})

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
http.listen(server_port, () => {
    console.log('listening on *:' + server_port);
})
