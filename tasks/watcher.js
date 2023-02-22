const server = require('browser-sync');
const { watch, parallel, series } = require('gulp');

module.exports = function watching() {
    watch('src/*.html', parallel('dev_html'));
    watch('src/**/*.js', parallel('dev_js'));
    watch('src/scss/**/*.scss', parallel('dev_sass'));

}

