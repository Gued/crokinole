const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);

app.use(express.static('public'));

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