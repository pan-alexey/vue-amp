const path = require('path');
const paths = require('./helpers/paths')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: path.join(paths.src, 'app.js'),
    resolve: { 
      alias: { 
        '@': paths.src, 
      }, 
    }, 
    output: {
      libraryTarget: 'commonjs2',
      path: paths.dist
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              extractCSS: true
            }
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
          },
          {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
          },
          {
            test: /\.svg$/,
            use: ['html-loader', {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  {convertColors: {currentColor: true}}
                ]
              }
            }]
          },
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
          }
        ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
      }),
      new VueSSRServerPlugin({
        filename: 'server-bundle.json'
      }),
    ]
};