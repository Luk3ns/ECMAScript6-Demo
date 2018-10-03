const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path');

module.exports = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'src/img/',
      to: 'img/' 
    },{
      from: 'src/css/',
      to: 'css/'
    }
  ])
  ],
  module: {
    rules: [
        {
            test: /\.html$/,
            exclude: /node_modules/,
            use: {loader: 'html-loader'}
        }
    ]
  }
};