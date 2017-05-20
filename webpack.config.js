const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'js/app.bundle.js',
        path: path.resolve(__dirname, 'assets/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.sass/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader','sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/app.css')
    ]
};
