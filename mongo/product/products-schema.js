'use strict';

const mongoose = require('mongoose');

const products  = mongoose.Schema({
    _id: { type: 'string', required: true },
    price: { type: 'number', required: true },
    weight: { type: 'number'},
    quantity_in_stock: {type: 'number', required: true}

})

module.exports = mongoose.model('products ', products );
