const path = require('path');
const { merge } = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contentHash].js',
  },
});
