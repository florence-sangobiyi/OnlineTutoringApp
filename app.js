const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Setup catch-all API catch-all route
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to Tutor App API'
  }))
  

module.exports = app;
