const express = require('express');
const app = express();
const getElementById = require('./utils');

const PORT = 4001;

const products = [
    {
        id: 1,
        name: 't-shirt',
        price: 49.99
    },
    {
        id: 2,
        name: 'sweater',
        price: 69.99
    }
]

app.get('/products', (req, res, next) => {
    if (products) {
        res.send(products);
    } else {
        res.status(404).send('No products found');
    }
});

app.get('/products/:id', (req, res, next) => {
  const id = req.params.id;
  for (let product of products) {
    if (product.id == id) {
      res.send(product);
    }
  }
  res.status(404).send('Item not found');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


