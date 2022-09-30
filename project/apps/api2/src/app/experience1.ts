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

module.exports = router;
