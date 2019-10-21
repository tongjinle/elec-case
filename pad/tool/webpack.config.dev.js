const path = require("path");

const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = require("./webpack.config.base");

module.exports = webpackMerge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    port: 9000,
    hot: true,
    host: "0.0.0.0" //这里也可以写死本地ip
    // proxy: {
    //   "/elecase": {
    //     target: "http://39.105.78.216:8081",
    //     // pathRewrite: { "^/elecace": "/adf" },
    //     changeOrigin: true,
    //     secure: false // 接受 运行在 https 上的服务
    //   }
    // }
  }
});
