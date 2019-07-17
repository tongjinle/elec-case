const path = require('path');
const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = WebpackMerge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      minify: {
        removeComments: true,
        collapseInlineTagWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style/index.css'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  }
});