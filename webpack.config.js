const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.bundle.js',
        path:'./public/js/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },

        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/sass")]
    }
};
