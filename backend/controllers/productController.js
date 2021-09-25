const Product = require('../models/product');

//create new product => /api/v1/products/new

exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};
//api/v1/product get alll prodcuts
exports.getProduct = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};
//get single prodcut details /ap1/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {
  //params is :id
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'product not found',
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
};

//update product /ap1/v1/products/:id
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'product not found',
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
};
