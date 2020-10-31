const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/', (req, res) =>{
    Product.find().then( products =>{
        res.status(200).json(products)
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.post('/', (req, res) =>{
    const newProduct = new Product(req.body);

    newProduct.save().then(result => {
        res.status(201).json(result)
    }).catch(err =>{
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) =>{
    const updateProduct = req.body;

    Product.findOneAndUpdate({ _id: req.params.id }, updateProduct, { new: true }).then(
        product => {
            res.status(200).json(product);
        }).catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) =>{
    Product.findOneAndDelete({ _id: req.params.id }).then(
        product => {
            res.status(200).json(product);
        }).catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router