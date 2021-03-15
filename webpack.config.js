/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env, argv) => ({

  entry: [ "./src/Index.tsx" ],

  output: {
    path: path.resolve(process.cwd(), 'dist'),
  },

  devtool: (argv.mode === "development")
    ? "source-map" // Tell to extract source-maps from ts-loader (tsconfig:sourceMaps)
    : "eval-source-map", // Maps only line

  resolve: {
    extensions: [ ".ts", ".tsx" ]
  },

  node: {
    fs: "empty"
  },

  module: {
    rules: [
      {
        test: /(?<!stories)\.(tsx?)$/,
        use: [ "babel-loader" ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.svg$/,
        use: [ {
          loader: "@svgr/webpack",
          options: { dimensions: false }
        }, "url-loader" ],
      },
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader"
          },
        ]
      },
    ]
  },

  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "public"),
    hot: false,
    inline: false,
  },

  plugins: [
    new webpack.ProgressPlugin(),
    // new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(argv.mode || "production")
    }),
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public/favicon",
          to: "favicon/"
        },
        {
          from: "public/img",
          to: "img/"
        },
        "public/robots.txt",
        "public/security.txt"
      ]
    }),
  ].filter(p => p)
});