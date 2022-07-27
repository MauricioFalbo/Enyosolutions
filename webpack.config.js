const path = require('path')
const { NormalModuleReplacementPlugin } = require('webpack')

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/infra/http/server.ts',
  optimization: {
    nodeEnv: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.build.json',
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@modules': path.resolve(__dirname, './src/modules'),
      '@infra': path.resolve(__dirname, './src/infra'),
      '@core': path.resolve(__dirname, './src/core'),
      '@entity': path.resolve(__dirname, './src/modules/entity'),
      '@repositories': path.resolve(__dirname, './src/modules/repositories'),
    },
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  plugins: [
    // Ignore knex dynamic required dialects that we don't use
    new NormalModuleReplacementPlugin(
      /m[sy]sql2?|oracle(db)?|sqlite3|pg-(native)/,
      'noop2'
    ),
  ],
}
