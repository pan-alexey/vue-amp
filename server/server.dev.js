const webpack = require('webpack');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' )

const copyTemplate = require('./helpers/copyTemplate');
const console = require('./helpers/console');
const serverAMP = require('./servers/amp');
const serverLive = require('./servers/live');

async function run() {
  let webpackReady = false;
  let reloadAmpServer = null;
  let reloadLiveServer = null;
  let servers = {};

  await copyTemplate(async() => {
    if (reloadAmpServer) await reloadAmpServer();
    if (reloadLiveServer) await reloadLiveServer();
  });

  const webpackConfig = require('./webpack.config');
        webpackConfig.mode = "development";
        webpackConfig.plugins.push(new SimpleProgressWebpackPlugin( {format: 'minimal'}));
  webpack(webpackConfig).watch({aggregateTimeout: 300}, async(err, stats) => {
    if (reloadAmpServer) await reloadAmpServer();
    if (reloadLiveServer) await reloadLiveServer();

    if (!webpackReady) {
      const amp = await serverAMP(8090);
      servers.amp = amp.port;
      reloadAmpServer = amp.reload;

      const live  = await serverLive(servers.amp);
      servers.live = live.port;
      reloadLiveServer = live.reload;

      webpackReady = true;
    }
    console(err, stats, servers);
  });
}
run();