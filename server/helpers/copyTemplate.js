const fs = require('fs-extra')
const chokidar = require('chokidar');
const path = require('path');
const paths = require('./paths');

const inputPath = path.join(paths.src, './index.html');
const outputPath = path.join(paths.dist, './index.html');

module.exports = async function(callback) {
  await fs.ensureDir(paths.dist);
  await fs.copyFile(inputPath, outputPath);

  if( callback ){
    chokidar.watch(inputPath ,{usePolling:true}).on('all', async () => {
      await fs.copyFile(inputPath, outputPath);
      await callback()
    });
  }
};
