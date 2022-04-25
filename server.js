const express = require('express');
const app = express();

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

const getIndexById = (elementId, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === elementId) {
            return i;
        } else {
            return -1;
        }
    }
}

app.get('/products', (req, res, next) => {
    if (products) {
        res.send(products);
    } else {
        res.status(404).send('No products found');
    }
});

app.get('/products/:id', (req, res, next) => {
    const idx = getIndexById(req.params, products);
    if (idx !== -1) {
        res.send(products[idx]);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


