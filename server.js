const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(__dirname + '/dist/EGPoulette'))

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server= http.createServer(app);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})