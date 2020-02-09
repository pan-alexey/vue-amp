const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const express = require('express')();
const server = require('http').Server(express);
const io = require('socket.io')(server);
const paths = require('../helpers/paths');

let port = '';

express.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

express.get('*', async function (request, response) {
  const template = await fs.readFile(path.join(paths.server, './public/index.dev.html'));

  const html = _.template(template)({
    port
  });

  response.send(html)
});

const reload = function(){
  io.sockets.emit('reload', 'everyone');
}

module.exports = async function(sourcePort) {
  port = sourcePort;

  return new Promise((resolve, reject) => {
    server.listen(8091 ,() => {
      const port = 8091;
      resolve({port, reload});
    })
    .on('error', (err)=> {reject(err);})
  });
}