const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose
    .connect('mongodb://db:2707/api-products',{
        useNewUrlParser: true
    }).then(result => {
        console.log('MongoDB connected');
    }).catch(error => {
        console.log(error);
    });

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Servidor listening ${PORT}`);
});