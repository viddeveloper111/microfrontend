const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 9000,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),  
    },
  },
  entry: "./index.js",
  output: {
    filename: "main.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
