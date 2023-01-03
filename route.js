const { Router } = require('express');

const Product = require('./schema');

const route = Router();

const products = ['cellphone', 'table', 'calculator', 'shoes', 'pants', 'shirt', 't-shirt'];

route.get('/get-all', async (_req, res) => {
    const products = await Product.find();

    res.json(products)
});

route.get('/add', async (_req, res) => {
    const newProduct = {
        name: products[Math.ceil(Math.random() * products.length)],
        price: Math.round(Math.random() * 90 + 10)
    }
    await Product.create(newProduct);

    res.json({
        state: true,
        message: 'New product was added'
    });
});

module.exports = route;