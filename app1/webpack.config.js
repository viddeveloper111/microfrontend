const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 8500,
    headers: {
      "Access-Control-Allow-Origin": "*", // ✅ CORS support
    },
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  output: {
    filename: "app1.js",
    libraryTarget: "system", // ✅ Important: export as SystemJS module
    publicPath: "http://localhost:8500/", // ✅ So SystemJS can find it
  },
  module: {
    rules: [
       {
        test: /\.(js|jsx)$/,      // supports .js and .jsx files
        exclude: /node_modules/,
        use: 'babel-loader',      // transpiles JSX and modern JS
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  externals: ["react", "react-dom"], // ✅ Use from import-map
};
