'use strict';

const mongoose = require('mongoose');
const Products = require('./mongo/product/products-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/lab5db';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true});

mongoose.set('useFindAndModify', false);
const p = new Products({price:20,weight:100, quantity_in_stock:300})

p.save();