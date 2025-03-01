var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// TODO: create routers here
var indexRouter = require('./routes');
var usersRouter = require('./routes/users');

var server = express();

// view engine setup
server.set('views', path.join(__dirname, '/../frontend/src/views'));
server.set('view engine', 'jade');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, '/../frontend/public')));


// TODO: create routes links here that link back to the page routers that we created ealier.
server.use('/', indexRouter);
server.use('/users', usersRouter);

// create a static route to server static contents from
server.use('/static', express.static(path.join(__dirname, '/../frontend/public')))

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;
