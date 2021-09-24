const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter product name'],
    trim: true, //remove all blank spaces
    maxLength: [100, 'Product name connot exceed 100 characters '],
  },
  price: {
    type: Number,
    required: [true, 'please enter product price'],

    maxLength: [5, 'Product name connot exceed 100 characters '],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'please enter product description'],
  },
  ratings: { type: Number, default: 0 },
  //arrays of objects(picutes)
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'please select category for this product'],
    enum: {
      values: [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accesories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home',
      ],
      message: 'Please select category for product',
    },
  },
  seller: {
    type: String,
    required: [true, 'Please enter product seller'],
  },
  stock: {
    type: Number,
    required: [true, 'Please enter prodcut stock'],
    maxLength: [5, 'Product name cannot exceed 5 characters'],
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: {
    name: {
      type: String,
      required: false,
    },
    rating: {
      type: String,
      required: false,
    },
    comment: {
      type: String,
      required: false,
    },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
