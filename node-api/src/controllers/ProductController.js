//const mongoose = require('mongoose');

const Product = require('../models/product');

module.exports = {
    async index(req, res) {
        const products = await Product.findAll();

        return res.json(products);
    },

    async show(req, res) {
        const products = await Product.findByPk(req.params.id);

        return res.json(products);
    },

    async store(req, res) {
        const products = await Product.create(req.body);
        
        return res.json(products);
    },

    async update(req, res) {
        let product = await Product.findByPk(
            req.params.id
        );

        if (!product) {
            return res.status(400).json({error: "Product not exists"});
        }

        product = await product.update(req.body);

        return res.json(product);
    },

    async destroy(req, res) {
        let product = await Product.findByPk(
            req.params.id
        );

        if (!product) {
            return res.status(400).json({error: "Product not exists"});
        }

        await Product.destroy({ where: { id: req.params.id } });

        return res.send();
    },
}