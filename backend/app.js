const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const realtorsRouter = require('./routes/realtors');
const db = require('./db');
const usersHelpers = require('./helpers/usersHelpers')(db);
const realtorsHelpers = require('./helpers/realtorsHelpers')(db);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users',    usersRouter(usersHelpers));
app.use('/api/realtors', realtorsRouter(realtorsHelpers));


module.exports = app;
