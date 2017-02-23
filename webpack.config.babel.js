import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: path.join(process.cwd(), 'src', 'app.js'),

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.pug/,
        loader: 'pug-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'src', 'index.pug')
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    stats: 'errors-only'
  }
}
