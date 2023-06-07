const htmlWebpackPlugin = require('html-webpack-plugin');
const filemanagerWebpackPlugin = require('filemanager-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin( {
            template: path.join( __dirname, 'src', 'template.pug' ),
            filename: "index.html"
        } ),
        new filemanagerWebpackPlugin( {
            events: {
                onStart: {
                    delete: ['dist']
                }
            }
        } )
    ],
    devServer: {
        watchFiles: path.join( __dirname, 'src' ),
        port: 9000
    }
}
