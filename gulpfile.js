var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var babel = require('gulp-babel');
var concat = require('gulp-concat');


//gets the source and passes it to it's destination
gulp.task('sass', function(){
    return gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});
gulp.task('production', function(){
    return gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
});

gulp.task('browserSync', () => {
    browserSync.init({
        server:'.'
    });
});

//gulp watch syntax
gulp.task('watch', function(){
    ('scss/**/*.scss', ['sass']);
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'watch']);

var jsAssets = ['node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/font-awesome/fonts']

gulp.task('compile-js-assets', function() {
    return gulp.src(jsAssets)
    .pipe(babel())
    .pipe(concat('assets.js'))
    .pipe(gulp.dest('js/'))
})