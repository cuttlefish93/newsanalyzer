const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {

  entry: {
    index: './src/index.js',
    about: './src/pages/about/index.js',
    analytics: './src/pages/analytics/index.js'
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
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|svg|webp|gif)$/,
        use: [
          'file-loader?name=./assets/images/[name].[ext]&esModule=false',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
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
      template: './src/pages/about/index.html',
      filename: 'about.html',
      chunks: ['about'],
      hash: true,
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/analytics/index.html',
      filename: 'analytics.html',
      chunks: ['analytics'],
      hash: true,
      inject: false
    }),
    new WebpackMd5Hash(),
  ]
}
