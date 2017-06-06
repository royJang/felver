var config = require('./webpack.config.js');

config.entry = {
  'felver': './bin/index.js',
};

config.output = {
  filename: './dist/[name].js',
  library: 'felver',
  libraryTarget: 'umd'
};

module.exports = config;