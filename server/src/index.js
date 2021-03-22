const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { errorHandler, notFound } = require('./middlewares');

const app = express();
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

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://localhost:${port}`);
});
