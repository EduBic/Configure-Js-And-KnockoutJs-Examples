"use strict";

var gulp    = require('gulp'), 
    connect = require('gulp-connect'),
    CSS_DIR = './css/**/*.css',
    HTML_DIR = './**/*.html',
    JS_DIR = './js/**/*.js';


gulp.task('html', function () {
    gulp.src(HTML_DIR)
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(CSS_DIR)
        .pipe(connect.reload());
});

gulp.task('javascript', function () {
    // when javascript file changes i reload the html
    gulp.src(HTML_DIR)              
        .pipe(connect.reload());
});


gulp.task('watch', function () {
    gulp.watch([HTML_DIR], ['html']);
    gulp.watch([CSS_DIR], ['css']);
    gulp.watch([JS_DIR], ['javascript']);
});

gulp.task('connect', function () {
    connect.server({
        root: './', 
        livereload: true
    });
});

gulp.task('default', ['html', 'css', 'javascript', 'watch', 'connect']);