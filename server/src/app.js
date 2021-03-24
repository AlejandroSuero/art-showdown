// imports from node_modules
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// imports from files
const middlewares = require('./middlewares');
const users = require('./api/users');

// Connection to DB
// TODO: refactor to have the connection in a separate file
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

// Middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
// body parser
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use('/api/users', users);

// Middlewares error handlers
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
