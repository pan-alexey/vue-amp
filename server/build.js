const fs = require('fs-extra')
const path = require('path');
const paths = require('./helpers/paths');

const resolveTemplate = function(templatePath){
  return path.resolve(templatePath,'./index.html')
}

fs.copy(resolveTemplate(paths.src), resolveTemplate(paths.dist), err => {
  if (err) throw new Error(err);
})

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const webpakCompiler= webpack(webpackConfig);

webpakCompiler.run((err, stats) => { 
  if (err || stats.hasErrors()) throw new Error(err);
});