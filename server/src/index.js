// imports from node_modules
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// imports from files
const middlewares = require('./middlewares');

const app = express();

// Middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

// Middlewares error handlers
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// Set port and listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://localhost:${port}`);
});
