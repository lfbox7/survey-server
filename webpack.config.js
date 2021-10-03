const path = require('path')

module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}