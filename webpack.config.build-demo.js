
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, './demo'),
  entry: {
    app: ['./index.js','../src/App.js']
  },
  output: {
    path: path.resolve(__dirname, './demo/public'),
    filename: 'demo.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx'],
  }
};
