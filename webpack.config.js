const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const DotEnv = require('dotenv-webpack');

// config for dev and prod for same webpack properties
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssWebpackPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: 'src/index.html', filename: 'index.html', minify: true }),
    new MiniCssWebpackPlugin(),
    new DotEnv(),
  ],
};
