const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'), // the bundle output path
    filename: 'bundle.js', // the name of the bundle
    assetModuleFilename: 'images/[name][ext]'
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // to import index.html file inside index.js
    })
  ],
  devServer: {
    static: path.join(__dirname, '/dist'),
    port: 4570 // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', {'runtime': 'automatic'}],
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpeg|jpeg|gif)$/,
        type: 'assets'
      }
    ]
  }
};
