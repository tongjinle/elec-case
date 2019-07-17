const Webpack = require('webpack');
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    main: './src/main'
  },
  resolve: {
    extensions: ['.js', '.vue', '.less'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: path.resolve(__dirname, '../node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]',
      //     publicPath: "./images/",
      //     outputPath: "images/"
      //   }
      // },
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader
      //   }
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist')
  }
};

