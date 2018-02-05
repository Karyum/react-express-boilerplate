const webpackBase = require('./webpack.base.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(webpackBase, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
