'use strict';

const mongoose = require('mongoose');

// const Categories = require('./mongo/categories/categories-schema.js');
const Products = require('./mongo/product/products-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/lab5db';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

const p = new Products({price:20,weight:100, quantity_in_stock:300})
// const categories1 = new Categories({name: 'lenovo'})

p.save();
// categories1.save();
// const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// // Connect
// mongoose.connect(MONGOOSE_URI, { useUnifiedTopology: true, useNewUrlParser: true });

// // Do some work
// const Categories = require('./models-singular/categories.js');
// const categories = new Categories();