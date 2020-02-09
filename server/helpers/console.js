const ips = require('./ip')();
const chalk = require('chalk');

module.exports = function (err, stats, servers) {
  process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
  for (const key in servers) {
    const name = String(key).toUpperCase();
    console.log(chalk.black.bgGreen.bold(` ${name} `) + ' running at:');
    ips.forEach( ip => {
      console.log( '- '+ chalk.blue(`http://${ip}`) + chalk.blue.bold(`:${servers[key]}`));
    });
    console.log('');
  }

  if (err || stats.hasErrors() || stats.hasWarnings()) {
    console.log(stats.toString({
      assets: false,
      cached: false,
      cachedAssets: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
      colors: true,
      entrypoints: false
    }))
    return;
  }

  statsJson = stats.toJson()
  console.log(`Webpack version: ${statsJson.version}`)
  console.log(`Compilation hash: ${statsJson.hash}`)
  console.log(`Compilation time: ${statsJson.time}ms`)
}