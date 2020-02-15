const _ = require('lodash');
const fs = require('fs-extra');
const { createBundleRenderer } = require('vue-server-renderer');
const path = require('path');

const paths = require('../helpers/paths');
const pageRender = require('../render');
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


// mocks for cms-api (https://www.ozon.ru/api/cms-api.bx/menu/category/v1)
express.get('/mock/catalog', async function (req, res) {
  res.header("Content-Type",'application/json');
  res.sendFile(path.join( paths.server, 'mocks/category.json'));
})

express.get('*', async function (req, res) {
  if( !(render || template) ) {
    res.status(500);
    res.send('render or template not load');
    return;
  }


  const context = {
    ...req,
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error');
      console.log(err)
    }
    const page = pageRender(template, html, context);
    res.end(page);
  });
});

const bundlePath = path.join(paths.dist, 'server-bundle.json');
const templatePath = path.join(paths.dist, 'index.html');

const loadRender = async function() {
  template = await fs.readFile(templatePath);
  serverBundle = await fs.readJson(bundlePath);
  renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
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
    });

    server.on('error', (err) => {
      reject(err);
    });
  });
}