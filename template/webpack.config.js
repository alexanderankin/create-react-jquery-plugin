require('dotenv').config({ path: require('path').join(__dirname, '.env') });

var miniCSS = require('mini-css-extract-plugin');

var fs = require('fs');
var path = require('path');

module.exports = {
  plugins: [ new miniCSS() ],
  // entry: { <%= project.camelName %>: './src/plugin.jsx' },
  // output: { filename: '[<%= project.camelName %>].js' },
  entry: { plugin: './src/plugin.jsx' },
  output: { filename: '[name].js' },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: './example',
    // open: true  // uncomment this to open browser from CLI
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/,  use: [ miniCSS.loader, 'css-loader' ] }
    ]
  }
};
