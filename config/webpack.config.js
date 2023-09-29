module.exports = function(isProd = false) {
  const mode = isProd ? 'production' : 'development';

  const config = {
    mode,
    devServer: {
      port: PORT,
      compress: true,
      hot: true,
      static: {
        directory: path.join(__dirname, STATIC_DIR),
      }
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webm)$/i,
          type: 'asset/resource'
        }
      ]
    },
  };

  return config;
}