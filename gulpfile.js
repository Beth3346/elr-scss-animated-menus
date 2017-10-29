var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

gulp.task('scsslint', function() {
    return gulp.src('src/**/*.scss')
        .pipe(scsslint());
});

gulp.task('default', ['scsslint']);