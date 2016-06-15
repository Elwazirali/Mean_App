/**
 * Created by Ali on 2016-06-03.
 */

var gulp   = require('gulp');
var build = require('gulp-build');

gulp.task('build', function() {
    gulp.src('scripts/*.js')
        .pipe(build({ GA_ID: '123456' }))
        .pipe(gulp.dest('dist'))
});