import * as express from 'express';
const router = express.Router();
const Handlebars = require('handlebars');

router.get(
  '/health',
  (_req: express.Request, res: express.Response<{ status: string }>) => {
    res.send({ status: 'working' });
  }
);

router.get('/1', (_req: express.Request, res: express.Response) => {
  const template = Handlebars.compile('Name: {{name}}');
  res.send(template({ name: 'Nils' }));
});

router.get('/2', (_req: express.Request, res: express.Response) => {
  const template = Handlebars.compile('Name: {{name}}');
  res.send(template({ name: 'Nils' }));
});

module.exports = router;
