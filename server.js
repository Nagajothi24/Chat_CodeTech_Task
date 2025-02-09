const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public')); // Serve frontend files

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg); // Broadcast message to all users
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
console.log("Serving files from:", __dirname + "/public");
server.listen(3000, () => console.log('Server running on http://localhost:3000'));
