const { resolve } = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    forceEnv: process.env.NODE_ENV || 'development',
    sourceRoot: 'app/javascript',
    cacheDirectory: env === 'development' ? false : resolve(__dirname, '..', '..', '..', 'tmp', 'cache', 'babel-loader'),
  },
};
