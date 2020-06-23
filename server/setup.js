module.exports = {
    path: process.env.INIT_CWD || __dirname,
    port: process.env.PORT || 3030,
    request: '/*',
    public: 'build/',
    file: 'index.html',
    favicon: '/build/favicon.ico',
    banner: '\nExpress server on\n',
};