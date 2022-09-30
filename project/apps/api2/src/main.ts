/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();
const expressNunjucks = require('express-nunjucks');

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api2!' });
});

app.set('views', './apps/api2/src/views/templates');

const njk = expressNunjucks(app, {
  watch: true,
  noCache: true,
});

app.use('/', require('./app/experience1'));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
