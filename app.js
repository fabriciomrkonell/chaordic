'use strict';

var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    router_urls = require('./routes/urls'),
    router_users = require('./routes/users'),
    router_stats = require('./routes/stats'),
    mongoose = require('./config/database'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

// Router config
app.use('/urls', router_urls);
app.use('/users', router_users);
app.use('/stats', router_stats);

module.exports = app;