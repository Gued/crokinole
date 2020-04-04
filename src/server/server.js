const express = require('express')();
const server = require('http').Server(express);
const io = require('socket.io').listen(server);

server.listen(8081,function(){ // Listens to port 8081
    console.log('Listening on '+server.address().port);
});

io.on('connection', socket => {
    socket.emit('CONNECT');

    socket.on('disconnect', () => {
        io.emit('DISCONNECT');
    })

    socket.on('pingServer', () => {
        io.emit('MESSAGECHANNEL', 'Servers pinged with success');
    })
});