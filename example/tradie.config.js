var livereload = require('tradie-plugin-livereload').default;
var serve = require('tradie-plugin-serve').default;
var copy = require('tradie-plugin-copy').default;

module.exports = {
  script: {
    bundles: ['./index.jsx'],
    extensions: ['.js', '.jsx']
  },
  plugins: [livereload(), serve(), copy({files: ['index.html']})]
};
