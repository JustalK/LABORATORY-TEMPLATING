import * as express from 'express';
const router = express.Router();
const Handlebars = require('handlebars');

router.get(
  '/health',
  (_req: express.Request, res: express.Response<{ status: string }>) => {
    res.send({ status: 'working' });
  }
);

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/variables', (req, res) => {
  res.render('variables', {
    title: 'Test Title',
    username: 'Kevin Justal',
  });
});

router.get('/inheritance', (req, res) => {
  res.render('inheritance', {
    title: 'Test Title',
    username: 'Kevin Justal',
  });
});

module.exports = router;
