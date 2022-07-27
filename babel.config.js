module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@modules': './src/modules',
          '@infra': './src/infra',
          '@core': './src/core',
          '@entity': './src/modules/entity',
          '@repositories': './src/modules/repositories',
        },
      },
    ],
    '@babel/plugin-proposal-class-properties',
  ],
}
