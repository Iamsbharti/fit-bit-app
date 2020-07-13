const path = require("path");
const HtmlWebPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "url-loader?name=public/images/[name].[ext]",
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
