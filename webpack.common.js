const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.jsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          title: "Project",
          favicon : './public/favicon.ico',
          manifest: "./public/manifest.json",
          template: path.resolve(__dirname, "./src/index.html"),
        }),
        new webpack.DefinePlugin({
            'process.env': {
              'API_URL': JSON.stringify('https://fakestoreapi.com/'), 
            }
          })
      ],
      resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
          Utilities: path.resolve(__dirname, "src/"),
        },
      },
      stats: 'errors-only',
  performance: {
    hints: false
  }
}