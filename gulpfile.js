var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify-es').default;
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify');

gulp.task('styles', function () {
    return gulp.src('src/styles/app.bundle.scss')
        .pipe(plumber(function (error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/styles'))
});

gulp.task("scripts", function () {
    return gulp.src("src/scripts/app.bundle.js")
        .pipe(plumber(function (error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(babel())
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest("dist/scripts"))
});

gulp.task('watch', ['styles', 'scripts'], function () {
    gulp.watch('src/styles/**/*.scss', ['styles'])
    gulp.watch('src/scripts/**/*.js', ['scripts'])
});
gulp.task('build', ['styles', 'scripts']);