const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: "profile.html",
      template: "./profile.html",
      hash: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: "./assets/", to: "./assets/" },
      ]
    })
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
  },
};
