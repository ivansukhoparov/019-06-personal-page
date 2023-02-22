const { src, dest } = require('gulp');
const server = require('browser-sync');
const sass = require('gulp-dart-sass');
const concat = require('gulp-concat')

module.exports = function dev_sass() {
    return src(['src/scss/style.scss'], { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(dest('src/css', { sourcemaps: '.' }))
        .pipe(server.stream());
}