var router = './dist/';
var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('build', function() {
    return gulp.src('./src/transferbytes.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest(router));
});