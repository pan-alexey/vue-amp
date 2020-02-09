const _ = require('lodash');
const fs = require('fs-extra');
const chokidar = require('chokidar');
const { createBundleRenderer } = require('vue-server-renderer');
const path = require('path');

const paths = require('../helpers/paths');
const asyncRender = require('../render');
const express = require('express')();
const server = require('http').Server(express);

let render = null;
let template = null;

express.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

express.get('*', async function (request, response) {
  if( !(render || template) ) {
    response.status(500);
    response.send('render or template not load');
    return;
  }

  const context = {
    ...request
  }
  const { html, style } = await asyncRender(renderer, context);
  const body = _.template(template)({
    html,
    style,
    request,
  })

  response.send(body)
});

const bundlePath = path.join(paths.dist, 'server-bundle.json')
const templatePath = path.join(paths.dist, 'index.html')

const loadRender = async function() {
  template = await fs.readFile(templatePath);
  serverBundle = await fs.readJson(bundlePath);
  renderer = createBundleRenderer(serverBundle, {
    inject: false,
  });
}

const reload = async function() {
  await loadRender();
}

module.exports = async function(port) {
  await loadRender();
  return new Promise((resolve, reject) => {
    server.listen(port ,() => {
      resolve({port, reload});
    })
    .on('error', (err)=> {reject(err);})
  });
}