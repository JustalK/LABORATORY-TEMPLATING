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
    arrayComplex: {
      orders: [
        {
          id: 'o1',
          restaurant: {
            id: 'r1',
            address: {
              id: 'a1',
            },
          },
          client: {
            id: 'c1',
          },
        },
      ],
      clients: {
        c1: {
          title: 'Mister',
        },
      },
      restaurants: {
        r1: {
          title: 'My Restaurant',
        },
      },
      adresses: {
        a1: {
          city: 'Paris',
        },
      },
    },
  });
});

router.get('/metadata', (req, res) => {
  res.render('metadata', { layout: false });
});

router.get('/partials', (req, res) => {
  res.render('partials', { layout: false });
});

module.exports = router;
