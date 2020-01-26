const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),

    
] 

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname,'app')

    },

    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false',{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}],
            }
        ]
    },

    /*
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html',

        }),
        new HtmlWebpackPlugin({
            filename: 'ee.html',
            template: 'app/ee.html',

        })

    ]
    */

}