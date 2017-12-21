/* eslint-disable import/no-extraneous-dependencies */

const webpackBase = require('./webpack.base.config.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

webpackBase.devtool = 'inline-source-map';
webpackBase.devServer = { contentBase: './dist' };

if (process.env.ANALYZE) {
  webpackBase.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackBase;
