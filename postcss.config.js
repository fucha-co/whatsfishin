module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-import': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-preset-env': {},
    'postcss-clean': {
      level: 1,
    },
    'postcss-hash': {
      trim: 10,
      manifest: 'src/_data/hashes_css.json',
    },
  },
};