'use strict';

const { resolve } = require('path');
const externals = require('webpack-node-externals');
const { name, main } = require('./package.json');

module.exports = {
  entry: resolve(__dirname, main),
  output: {
    path: __dirname,
    libraryTarget: 'commonjs2',
    filename: 'aws-lambda-bundle.js'
  },
  target: 'node',
  externals: [externals()],
  module: {
    rules: [
      { test:/\.js$/, use:'babel-loader', exclude: /node_modules/ },
      { test:/\.json$/, use:'json-loader' }
    ]
  }
};
