var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var rootDir = (process.env.MODE === 'production') ? 'dist' : 'src';
var baseURL = process.env.BASEURL;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(baseURL || '/', express.static(path.join(__dirname, rootDir)));

app.use((baseURL || '') + '/*', function (req, res, next) {
  res.sendFile(path.join(__dirname, rootDir, 'index.html'));
});

module.exports = app;
