const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [{loader: 'svg-inline-loader'}, {loader: 'svg-url-loader'}, {loader: 'url-loader'} ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.json$/,
          use: 'json-loader',
        },
        {
          test: /\.(js)x?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(ts)x?$/,
          exclude: /node_modules|\.d\.ts$/, // this line as well
          use: {
            loader: 'ts-loader',
            options: {
            compilerOptions: {
            noEmit: false,
           },
          },
         },
        },
      ],
    },
    
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
          { from: "public/assets", to: "assets/" }
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Replace 'dist' with the path to your build output directory
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};

export {}