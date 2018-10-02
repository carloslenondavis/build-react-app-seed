const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },    
    output: {
        filename: '[name].js',
        path: __dirname + 'public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.css', '.scss']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        hot: true,
        host: 'localhost',
        open: true,        
        overlay: {
            warnings: true,
            errors: true
        },
        port: 7000,
        stats: 'errors-only'
    }
}
