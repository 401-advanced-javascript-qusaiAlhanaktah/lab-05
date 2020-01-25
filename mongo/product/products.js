'use strict';

// const ModelData = require('../memory-data-model.js');
const schema = require('./products-schema.js');
class Model {

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    if(_id) return schema.findOne({_id});
    else return schema.find({})
  }

  create(record) {
    return this.schema.create(record)
    // return newRecord.save()
   }

  update(_id, record) {
    return schema.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }

}
class Products extends Model {
    constructor(schema) {
      super(schema);
     
    }
  }

module.exports = Products;
