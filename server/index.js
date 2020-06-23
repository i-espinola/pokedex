// Express server
var setup = require('./setup');
var http = require('http');
var favicon = require('express-favicon');
var express = require('express');
var path = require('path');
var app = express();

app.use(favicon(setup.path + setup.favicon));
app.use(express.static(setup.path));
app.use(express.static(path.join(setup.path, setup.public)));
app.get(setup.request, (request, response) => {
    response.sendFile(path.join(setup.path, setup.public, setup.file));
});

// Start Serve
var server = http.createServer(app);
server.listen(setup.port, () => {
    console.log(setup.banner);
});