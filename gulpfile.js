var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
var typescript = require('gulp-tsc');

/*
 * From http://webpack.github.io/docs/usage-with-gulp.html
 */

gulp.task('webpack', function(callback) {
  var config = require('./webpack.config');

  // run webpack
  webpack(config, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    
    gutil.log('[webpack]', stats.toString({
        // output options
    }));

    callback();
  });
});