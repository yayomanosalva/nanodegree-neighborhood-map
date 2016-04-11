var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var replace =  require('gulp-html-replace');
var sourcemaps = require('gulp-sourcemaps');
var modernizr = require('gulp-modernizr');

gulp.task('content', function(){
  gulp.src('./src/index.html')
      .pipe(gulp.dest('./dist/'))
      .pipe(reload({stream: true}))
});

gulp.task('script', function(){
  gulp.src('./src/srcipts/*.js')
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(reload({stream: true}))
});

gulp.task('styles', function(){
  return gulp.src('./src/styles/*.js')
    .pipe(uglify())
      .pipe(gulp.dest('./dist/styles'))
});

gulp.task('modernizr', function() {
  gulp.src('./src/srcipts/*.js')
    .pipe(modernizr())
    .pipe(gulp.dest("build/"))
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    gulp.watch('./src/index.html', ['content']);
    gulp.watch('./src/scripts/*.js', ['scripts']);
    gulp.watch('./src/styles', ['styles']);
});