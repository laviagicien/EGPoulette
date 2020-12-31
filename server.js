// Importing express server related stuff
const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
// Using fallback to allow angular routing
const fallback = require('express-history-api-fallback');

// Importing socket.io
const socketIO = require('socket.io')

// Starting express server and redirect to index.html
app.use(express.static(__dirname + '/dist/EGPoulette/'))
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '/dist/EGPoulette/index.html')));
app.use(fallback(__dirname + '/dist/EGpoulette/index.html'));
const server = http.createServer(app);

//IO stuff
const io = socketIO(server, {
  transports: ['websocket'],
  cors: {
    origin: '*'
  }
});
io.on('connect', (socket) => {
  console.log('user connected');
  socket.on('new-message', (msg) => {
    console.log(msg)
    io.emit('message', msg);
  })
});



server.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});