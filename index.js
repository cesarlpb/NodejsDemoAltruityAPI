'use strict';

var path = require('path');
var http = require('http');
var express = require('express');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;
var indexPort = 8000;
const server1 = express();

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

server1.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})
server1.get('/docs', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/docs.html'));
})
server1.get('/public/assets/img/AltruityLogo.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/img/AltruityLogo.png'));
})

// Enabling Static Files from these folders:
server1.use(express.static(__dirname + '/public'));
server1.use(express.static(`${__dirname}/public/assets/img`));

server1.listen(8000, () => {
    console.log("Server 1 is up and running on port 8000");
})

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your homepage index.html shown on %d (http://localhost:%d)', indexPort, indexPort);
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

