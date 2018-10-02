const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',    
    output: {
        filename: 'js/[name].[hash].js',
        path: __dirname + './../build',
        chunkFilename: '[name].[chunkhas].js'
    },
    module: {
        rules: []
    },    
    plugins: [
        new webpack.ProgressPlugin(),        
    ],
    devtool: 'source-map',
};
