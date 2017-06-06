var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: "./bin/index.js"
  },
  output: {
    path: '/dist',
    publicPath: '/dist/',
    filename: 'felver.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
      	test: /\.js$/,
        exclude: /node_modules/,
      	loader: 'babel-loader'
      }
    ]
  },
  devtool: '#source-map'
};

if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}