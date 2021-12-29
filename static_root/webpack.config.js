const path = require('path')

module.exports = {
  entry: {
    app: './js/carpa_base.js'
  },
  watch: true,
  devtool: 'source-map',
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.js/,
            exclude: /node_modules/,
        }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
}