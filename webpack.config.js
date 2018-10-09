const webpackMerge = require('webpack-merge');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'dev',
  production: 'prod',
};

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = env === 'dev' ? require('./webpack/webpack.dev') : require('./webpack/webpack.prod');

module.exports = webpackMerge(common, envConfig);
