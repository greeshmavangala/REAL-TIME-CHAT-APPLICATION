const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('send_message', (data) => {
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});

server.listen(5000, () => console.log('Server running on port 5000'));
