const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: { path: path.resolve(__dirname, "build"), filename: "main.js" },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/template/index.html"),
      filename: "index.html",
    }),
  ],
  scripts: {
    dev: "webpack --mode development",
    start: "webpack-dev-server --mode development --open",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
};
