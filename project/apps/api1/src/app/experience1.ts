import * as express from 'express';
const router = express.Router();
const Handlebars = require('handlebars');
const template = Handlebars.compile('Name: {{name}}');

router.get(
  '/health',
  (_req: express.Request, res: express.Response<{ status: string }>) => {
    res.send({ status: 'working' });
  }
);

router.get(
  '/1',
  (_req: express.Request, res: express.Response<{ status: string }>) => {
    res.send(template({ name: 'Nils' }));
  }
);

console.log(template({ name: 'Nils' }));

module.exports = router;
