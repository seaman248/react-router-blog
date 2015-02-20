var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var locables = require('./locables');
// Work with date
var moment = require('moment');
// Configuration requires
var conf = require('./conf');