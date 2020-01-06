const Sequelize = require('sequelize'); 
const { Model } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
              name: Sequelize.STRING,
              amount: Sequelize.INTEGER,
              price: Sequelize.DOUBLE
            },
            {
                sequelize,
            }
        );
    }
}

module.exports = Product;