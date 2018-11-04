module.exports = {
  mode: 'production',
  output: {
    filename: 'code.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                browsers: ['last 1 Chrome versions'],
              },
            }],
          ],
        },
      },
    ],
  },
};
