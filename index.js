const express = require('express');

const { connectDB } = require('./db');
const productRoute = require('./route');
 
const app = express();

app.use(express.json())

app.get('/', (_req, res) => {
    res.end('Node from docker');
});
app.use('/product', productRoute);

const startApp = async () => {
    try {
        await connectDB()
        app.listen(3000);
    } catch (err) {
        console.log(err)
    }
}

startApp();
