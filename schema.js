const { Schema, model } = require('mongoose');

const Product = new Schema({
    name: String,
    price: Number
});

module.exports = model('product', Product);