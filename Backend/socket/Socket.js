// const http = require('http');
// const express = require('express');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST'],
//   },
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('message', (message) => {
//     io.emit('message', message);
//   });
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// module.exports = { server };
