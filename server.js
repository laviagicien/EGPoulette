const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fallback = require('express-history-api-fallback');

app.use(express.static(__dirname + '/dist/EGPoulette/'))
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '/dist/EGPoulette/index.html')));
app.use(fallback(__dirname + '/dist/EGpoulette/index.html'));
const server= http.createServer(app);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})