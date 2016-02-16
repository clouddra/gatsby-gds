module.exports = function (config, env) {
  config.merge({
    postcss: [
      require('autoprefixer'),
      require('precss')
    ]
  });
  config.removeLoader('scss');
  if (env === 'static') {
    config.loader('scss', function (cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = 'style!css?modules&minimize&localIdentName=[hash:base64:12]&importLoaders=1!postcss';
      return cfg
    });
  } else {
    config.loader('scss', function (cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = 'style!css?modules&localIdentName=[path][name]-[local]-[hash:base64:5]&importLoaders=1!postcss';
      return cfg
    });
  }
  return config;
};
