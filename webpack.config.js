module.exports = {
  entry: {
    'dist/app': './src/main.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
    ]
  },
  devServer: {
    open: true
  },
  devtool: 'source-map'
}