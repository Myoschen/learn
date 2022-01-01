const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SRC_PATH = path.resolve(__dirname, "src");
const PUBLIC_PATH = path.resolve(__dirname, "public");
const BUILD_PATH = path.resolve(__dirname, "build");

module.exports = {
  mode: "development",
  entry: {
    index: SRC_PATH + "/index.js",
  },
  output: {
    path: BUILD_PATH,
    filename: "js/[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      template: PUBLIC_PATH + "/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: { directory: BUILD_PATH },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    open: true,
    port: 3000,
  },
};
