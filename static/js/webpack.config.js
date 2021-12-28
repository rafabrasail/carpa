var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: './static/scr/carpa_base.js',
  output: {
    path: path.resolve('./static/js/'),
    filename: "[name]-[hash].js"
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ] 
};