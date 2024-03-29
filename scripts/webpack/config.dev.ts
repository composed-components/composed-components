import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import commonBabelConfig from '../babel/common.config';

export default {
  mode: 'development',
  entry: {
    app: './packages/docs/src/index.tsx',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Composed Components Docs',
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    symlinks: true,
    extensions: ['.js', '.jsx', '.json', '.wasm', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: commonBabelConfig(),
      },
    ],
  },
};
