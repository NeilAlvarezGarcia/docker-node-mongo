const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const connectDB = async () => {
    await mongoose.connect('mongodb://productdb:27017/products');
}


module.exports = { connectDB }