var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify-es').default;
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');

gulp.task('styles', function () {
    return gulp.src('src/styles/app.bundle.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/styles'))
});

gulp.task("scripts", function () {
    return gulp.src("src/scripts/app.bundle.js")
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