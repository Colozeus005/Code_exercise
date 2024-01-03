path = require('path')
html = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [ new html({title:"walfa restaurant", template: '.src/index.html'})],
    entry: './src/main.js',
    output: { filename: 'main-[contenthas].js',
        path: path.resolve(__dirname, 'output'),
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    module: {rules: [{test: /\.css$/, use: ['style-loader', 'css-loader']}, {test: /\.{png|ttf|oft)$/, type: 'asset/resource'}]

}}