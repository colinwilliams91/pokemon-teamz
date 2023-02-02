const path = require('path');
require('dotenv').config();

const { ENV_DEV } = process.env;

module.exports = {
  mode: ENV_DEV || 'production',
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js', // set up for code-splitting
    path: path.resolve(__dirname, 'client', 'dist'),
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(jsx|js|png)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {} // removed for babelrc: presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
};
