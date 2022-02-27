const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/camp-planner/"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [ 
    new Dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'camp-planner',
      template: './src/index.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      title: 'camp-planner-weather',
      template: './src/weather.html',
      filename: 'weather.html',
      inject: 'weather-tab'
    }),
    new HtmlWebpackPlugin({
      title: 'camp-planner-weather',
      template: './src/map.html',
      filename: 'map.html',
      inject: 'map-tab'
    }),
    new HtmlWebpackPlugin({
      title: 'camp-planner-weather',
      template: './src/gear.html',
      filename: 'gear.html',
      inject: 'gear-tab'
    }),
    new HtmlWebpackPlugin({
      title: 'camp-planner-weather',
      template: './src/meals.html',
      filename: 'meals.html',
      inject: 'meals-tab'
    }),
    new HtmlWebpackPlugin({
      title: 'camp-planner-weather',
      template: './src/about.html',
      filename: 'about.html',
      inject: 'about-tab'
    }),
  ],
  module: { 
    rules: [
      {
        test: /\.(svg|ico|gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};