const { src, dest } = require('gulp');


module.exports = function dev_html() {
    return src(['src/*.html']).pipe(dest('build'));

}