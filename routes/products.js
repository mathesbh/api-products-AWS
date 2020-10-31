const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.post('/', (req, res) =>{
    const newProduct = new Product(req.body);

    newProduct.save().then(result => {
        res.status(201).json(result)
    }).catch(err =>{
        res.status(500).json(err)
    })
});


module.exports = router