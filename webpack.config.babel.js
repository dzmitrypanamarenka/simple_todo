import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => ({
  // context: path.join(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src', 'index'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  // content: path.join(__dirname, 'dist', 'index'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })],
  resolve: {
    extensions: [".js", ".jsx"]
  }
  // watch: true,
  // watchOptions: {
  //     aggregateTimeout: 100
  // },
});
