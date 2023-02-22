const { src, dest } = require('gulp');
const server = require('browser-sync');

module.exports = function dev_js() {
    return src(['src/js/**/*.js']).pipe(server.stream());

}