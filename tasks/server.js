const server = require('browser-sync');

module.exports = function startServer(done) {
    server.init({
        server: {
            baseDir: 'src'
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
}

