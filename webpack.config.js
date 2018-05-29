const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./client/index.js"),
  mode: "development",
  output: {
    path: path.join(__dirname, "./public"),
    filename: "bundle.js"
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
