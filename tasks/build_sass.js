const { src, dest } = require('gulp');
const sass = require('gulp-dart-sass');
const concat = require('gulp-concat');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css')


module.exports = function dev_sass() {
    return src(['src/scss/style.scss'], { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer({
            overrideBrowserslist: ['last 8 versions'],
            browsers: [
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 11',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6',
            ],
        }))
        .pipe(clean())
        .pipe(concat('style.css'))
        .pipe(dest('build/css', { sourcemaps: '.' }))
}