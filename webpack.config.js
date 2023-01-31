const path = require('path');

const { ENV_DEV } = process.env;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    filename: '[name].bundle.js',
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
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
};
