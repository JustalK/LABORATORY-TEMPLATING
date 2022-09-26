import * as express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/no-layout', (req, res) => {
  res.render('home', { layout: false });
});

router.get('/alternative-layout', (req, res) => {
  res.render('home', { layout: 'alternative' });
});

router.get('/name', (req, res) => {
  res.render('home', {
    helpers: {
      name() {
        return 'Justalk';
      },
    },
  });
});

router.get('/helpers', (req, res) => {
  res.render('helpers', {
    cond: true,
    numbers: 0,
    arrayTest: ['Test 1', 'Test 2', 'Test 3'],
    arrayObjectTest: [
      {
        firstname: 'kevin',
      },
      {
        firstname: 'tom',
      },
      {
        firstname: 'alive',
      },
    ],
  });
});

module.exports = router;
