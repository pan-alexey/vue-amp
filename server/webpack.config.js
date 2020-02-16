const path = require('path');
const paths = require('./helpers/paths')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: path.join(paths.src, 'main.ts'),
    resolve: { 
      alias: { 
        '@': paths.src, 
      }, 
      extensions: [
        '.tsx',
        '.ts',
        '.mjs',
        '.js',
        '.jsx',
        '.vue',
        '.json',
        '.wasm'
      ],
      modules: [
        'node_modules',
      ],
    }, 
    output: {
      libraryTarget: 'commonjs2',
      path: paths.dist
    },
    module: {
        rules: [
          {
            test: /\.ts?$/,
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          },
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
            test: /\.(vue|(j|t)sx?)$/,
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue',
                '.ts',
                '.tsx'
              ],
              cache: true,
              cacheIdentifier: '17a09e65',
              emitWarning: false,
              emitError: false,
              eslintPath: '/Users/alexey/Documents/vue/node_modules/eslint',
              formatter: undefined
            },
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