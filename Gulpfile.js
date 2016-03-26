var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , sass = require('gulp-sass')
  , concatCss = require('gulp-concat-css')
  , uglify = require('gulp-uglify')
  , cssmin = require('gulp-cssmin')
  , rename = require('gulp-rename')
  , watch = require('gulp-watch')
  , server = require('gulp-express');

gulp.task('scripts', function () {
  gulp.src(['app/main.js'])
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('styles', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss('./styles.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  server.run(['server.js']);
  gulp.watch(['./public/**'], server.notify);
  gulp.watch('./app/**', ['scripts']);
  gulp.watch('./sass/**', ['styles']);
  gulp.watch('./server.js', [server.run]);

});

gulp.task('default', ['scripts','styles']);
