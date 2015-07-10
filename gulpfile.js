var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');


var paths = {
  main: 'src/js/main.js'
}

gulp.task('browserify', function(){
  browserify(main)
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
})

gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.desk('dist'));
})