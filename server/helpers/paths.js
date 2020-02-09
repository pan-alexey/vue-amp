'use strict';

const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolve = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    packageJson: resolve('package.json'),
    server: resolve('./server'),
    dist: resolve('./dist'),
    build: resolve('./build'),
    src: resolve('./src')
}