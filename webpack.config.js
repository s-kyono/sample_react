const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { NONAME } = require('dns');
const DEV_PORT = process.env.PORT || 3000;
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";
module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './web/src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader',
              {
                loader: "css-loader",
                options: {
                  // オプションでCSS内のurl()メソッドの取り込みを禁止する
                  url: false,
                  // ソースマップの利用有無
                  sourceMap: enabledSourceMap,
                  // 0 => no loaders (default);
                  // 1 => postcss-loader;
                  // 2 => postcss-loader, sass-loader
                  importLoaders: 2
                }
              },
              {
                loader: "sass-loader",
                options: {
                  // ソースマップの利用有無
                  sourceMap: enabledSourceMap
                }
              },
            ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'web/build/'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'web/build/'),
    port: DEV_PORT,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin(
      {
        patterns: [
          {
            from: path.resolve(__dirname, 'web/public/'),
            to: path.resolve(__dirname, 'web/build/')
          },
        ]
      }
    ),
  ]
};
