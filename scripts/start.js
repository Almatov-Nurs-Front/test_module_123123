// Modules 
const path = require('path');
// Webpack modules
const webpack = require('webpack');
// Webpack configs
const config = require('../config/webpack.config')();

// Compiler
const compiler = webpack(customWebpackConfig);

module.exports = function start(port, color) {
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Webpack compilation completed successfully');
    }
  });
}
