'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./sass/'));
});

gulp.task('sass:watch', function () {
 gulp.watch('./sass/**/*.sass', ['sass']);
});
