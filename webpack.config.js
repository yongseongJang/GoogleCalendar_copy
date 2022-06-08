const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, options) => {
  dotenv.config({
    path: env.dev ? "./dev.env" : "./.env",
  });

  return {
    mode: "development",
    entry: "./src/client/index.tsx",
    output: {
      path: path.resolve(__dirname, "build/client"),
      filename: "[name].js",
      publicPath: "/",
    },
    devtool: "inline-source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: "file-loader",
          options: {
            outputPath: "img",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      ],
    },
    devServer: {
      host: "127.0.0.1",
      port: 9000,
      open: true,
      hot: true,
      proxy: {
        "/api": {
          target: "http://127.0.0.1:9001",
          changeOrigin: true,
        },
      },
      historyApiFallback: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/client/index.html",
        filename: "./index.html",
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
  };
};
