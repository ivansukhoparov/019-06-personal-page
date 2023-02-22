const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');

module.exports = function dev_js() {
    return src(['src/js/**/*.js', 'src/js/main.js'], { sourcemaps: true })
        .pipe(uglify())
        // .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(dest('build/js', { sourcemaps: '.' }));

}
