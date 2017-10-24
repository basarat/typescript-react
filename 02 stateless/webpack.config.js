module.exports = {
  devtool: 'inline-source-map',
  entry: './src/app.tsx',
  output: {
      filename: __dirname + '/build/app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}