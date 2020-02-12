const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function sync(cb) {
    browserSync.init({
        server: './',
        port: 3000
    });

    gulp.watch('./scss/**/*', translateSassIntoCss);
    gulp.watch('./**/*.hmtl', browserSync.reload);
    gulp.watch('./**/*.js', browserSync.reload);
    cb();
}

function translateSassIntoCss(cb) {

    gulp.src('./scss/**/*')
        .pipe(sass({
            // errLogToConsole: true,
            outputStyle: "compressed"
        }))
        // .on('error', console.error.bind(console))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(rename({}))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
    cb();
}

exports.default = gulp.parallel(translateSassIntoCss, sync);