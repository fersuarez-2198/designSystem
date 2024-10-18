#!/usr/bin/env node

const httpServer = require('http-server');
const path = require('path');

const server = httpServer.createServer({
  root: path.join(__dirname, 'public'),
});

const port = 4545;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
