const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const envIsProd = process.env.NODE_ENV === 'production' && true;

module.exports = {
  entry: {
    app: path.resolve(__dirname, './../src/index.js'),
  },
  module: {
    rules: [
      {
        test: [/\.js$/, path.resolve('./../*.js')],
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'eslint-loader',
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.css', '.scss'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: !envIsProd,
    host: 'localhost',
    open: !envIsProd,
    overlay: {
      warnings: false,
      errors: true,
    },
    port: 7771,
    stats: 'errors-only',
    historyApiFallback: true,
  },
};
