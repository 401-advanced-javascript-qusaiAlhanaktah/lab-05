'use strict';

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

module.exports = Model;