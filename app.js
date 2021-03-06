const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const subjectsRouter = require('./routes/subjects');
const lessonsRouter = require('./routes/lessons');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/categories', categoriesRouter)
app.use('/api/v1/subjects', subjectsRouter)
app.use('/api/v1/lessons', lessonsRouter)


// Setup catch-all API catch-all route
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to Tutor App API'
  }))
  

module.exports = app;
