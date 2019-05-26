module.exports = {
  mode: 'production',
  output: {
    filename: 'code.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env', {
              targets: {
                browsers: ['last 1 Chrome versions'],
              },
            }],
          ],
          plugins: [
            'babel-plugin-styled-components',
            '@babel/plugin-syntax-dynamic-import',
          ],
        },
      },
    ],
  },
};
