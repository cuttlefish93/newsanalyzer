const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: {
    index: './src/index.js',
    about: './src/pages/about/about.js',
    analytics: './src/pages/analytics/analytics.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|svg|webp|gif)$/,
        use: ['file-loader?name=assets/images/[name].[ext]&esModule=false']
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      hash: true,
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about/about.html',
      filename: 'about.html',
      chunks: ['about'],
      hash: true,
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/analytics/analytics.html',
      filename: 'analytics.html',
      chunks: ['analytics'],
      hash: true,
      inject: false
    }),
    new WebpackMd5Hash(),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/assets/images', to: 'assets/images' }
      ]
    })
  ]
}
