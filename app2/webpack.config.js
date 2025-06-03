const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 8600,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  output: {
    filename: "app2.js",
    libraryTarget: "system", 
    publicPath: "http://localhost:8600/", 
  },
  module: {
    rules: [
        {
        test: /\.(js|jsx)$/,      
        exclude: /node_modules/,
        use: 'babel-loader',    
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
  externals: ["react", "react-dom"], 
};
