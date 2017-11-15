const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, 'client/Index.jsx')],
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [new ExtractTextPlugin('../css/styles.css')],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader' // translates CSS into CommonJS modules
            },
            {
              loader: 'sass-loader' // compiles SASS to CSS
            }
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
