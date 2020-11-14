const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const products = require('./routes/products');

app.use('/products', products);

mongoose
    .connect('mongodb://db:27017/api-products',{
        useNewUrlParser: true
    }).then(result => {
        console.log('MongoDB connected');
    }).catch(error => {
        console.log(error);
    });

const PORT = 3002

app.listen(PORT, () =>{
    console.log(`Servidor listening ${PORT}`);
});