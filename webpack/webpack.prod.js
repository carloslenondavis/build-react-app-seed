const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',    
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, './../build'),
        chunkFilename: '[name].[chunkhas].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },    
    plugins: [
        new CleanWebpackPlugin(['./../build']),        
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
    ],
    devtool: 'source-map',
};
