module.exports = {
    mode: 'development',    
    output: {
        filename: '[name].js',
        path: __dirname + 'public',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    devtool: 'inline-source-map',
};
