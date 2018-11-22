const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/m-dom/m-dom.js',
  output: {
    filename: 'm-dom.js',
    path: path.resolve(__dirname, 'dist/m-dom')
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'Bundle JS (ES5) file with source map'
    }),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'src', to: path.resolve(__dirname, 'dist'), ignore: [ 'm-dom/**/*.js' ] }
    ])
  ]
};
