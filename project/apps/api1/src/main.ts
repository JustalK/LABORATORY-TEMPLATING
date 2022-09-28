/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { engine, create } from 'express-handlebars';

const app = express();
app.use(express.json());

const hbs = create({
  helpers: {
    name() {
      return 'Kevin Justal';
    },
    test(val) {
      return val !== undefined;
    },
  },
});

//app.engine('handlebars', engine());
//app.engine('handlebars', hbs.engine);
app.engine(
  'handlebars',
  engine({
    extname: '.handlebars',
    partialsDir: './apps/api1/src/views/partials/',
    defaultLayout: 'main',
    layoutsDir: './apps/api1/src/views/layouts/',
  })
);
app.set('view engine', 'handlebars');
app.set('views', 'apps/api1/src/views');

app.use('/', require('./app/experience2'));
app.use('/handlebars', require('./app/experience1'));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
