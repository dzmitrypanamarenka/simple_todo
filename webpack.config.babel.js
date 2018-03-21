import path from 'path';
import webpack from 'webpack';

export default () => ({
  // context: path.join(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: './src/init',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
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
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'common.js',
  //     minChunks: Infinity,
  //   })],
  resolve: {
    extensions: [".js", ".jsx"]
  },
    // watch: true,
    // watchOptions: {
    //     aggregateTimeout: 100
    // },
});
