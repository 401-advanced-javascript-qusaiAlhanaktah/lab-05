'use strict';

const ModelData = require('../memory-data-model.js');
const schema = require('./products-schema.js');

class Products extends ModelData {
    constructor() {
      super(schema);
     
    }
  }

module.exports = Products;
