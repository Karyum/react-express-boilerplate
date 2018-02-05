const webpackBase = require('./webpack.base.config.js');
const merge = require('webpack-merge');

module.exports = merge(webpackBase, {
  devtool: 'inline-source-map',
  devServer: { contentBase: './dist' },
  watch: true,
});
