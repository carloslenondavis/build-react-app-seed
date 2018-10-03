const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const envIsProd = process.env.NODE_ENV === 'production' && true;
console.log('diurname', __dirname);

module.exports = {    
    entry: {
        app: path.resolve(__dirname, './../src/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',                
            },            
            {
                test: /\.(js|jsx)$/,
                include: /src/,                
                loaders: 'eslint-loader',                
                options: {
                    // eslint options (if necessary)
                    fix: true          
                }
            },            
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.css', '.scss'],
    },    
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
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
            warnings: true,
            errors: true
        },
        port: 7000,
        stats: 'errors-only',
    },
};
