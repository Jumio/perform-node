const path = require('path');
const webpack = require('webpack');

const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
  mode: 'none',
  target: 'node',
  context: path.resolve(__dirname, 'src'),

  entry: './index.ts',

  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json'),
        extensions: ['.ts']
      })
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'node-sdk',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {}
        }
      }
    ]
  },

  plugins: [new CleanWebpackPlugin()]
};

module.exports = config;
