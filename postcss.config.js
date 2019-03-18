module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('cssnano'),
    require('postcss-preset-env')({
      browsers: 'last 4 versions',
      stage: 0,
    }),
  ],
};
