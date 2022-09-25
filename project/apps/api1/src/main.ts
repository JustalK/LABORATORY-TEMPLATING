/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'apps/api1/src/views');

app.use('/handlebars', require('./app/experience1'));

app.get('/', (req, res) => {
  res.render('home');
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
