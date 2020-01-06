const Sequelize = require('sequelize');

const Product = require('../models/product');

const databaseConfig = require('../config/database');

const models = [Product];

class Database {
    constructor() {
        this.init();
    }

    init() {
        // Esse connection equivale ao parâmetro 'sequelize' que é esperado dentro do init dos Models
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

module.exports = new Database();