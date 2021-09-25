const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/product.json');
const { connect } = require('mongoose');
const { deleteMany, insertMany } = require('../models/product');

//setting dotenv file
dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();
const seedProducts = async () => {
  try {
    //deleting the colletoin inside the database and insert the json file with the 9 products
    await Product.deleteMany();
    console.log('product are deleted');
    await Product.insertMany(products);

    console.log('product are added');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
