const path = require("path")

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
    code_splitting: path.resolve(__dirname, "./src/code_splitting.js")
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
}