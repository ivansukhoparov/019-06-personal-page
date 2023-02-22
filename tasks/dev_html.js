const { src, dest } = require('gulp');
const server = require('browser-sync');

module.exports = function dev_html() {
    return src(['src/*.html']).pipe(server.stream());

}