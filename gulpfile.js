var gulp = require('gulp'),
    jade = require('gulp-jade'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify');

var path = {
    jade: ['production/src/templates/**/*.jade'],
    html: 'builds/development/views/'
};

gulp.task('html', function() {
    return gulp.src(path.jade)
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest(path.html))
});


gulp.task('browserify', function() {  
  return browserify('production/src/js/controllers/server.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('builds/development/js/'));
});





