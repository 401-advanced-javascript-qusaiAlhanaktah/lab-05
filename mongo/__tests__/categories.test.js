'use strict';
require('@code-fellows/supergoose');

const Categories = require('../categories/categories.js');
describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test1 Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test2 Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('can update() a category', () => {
    let obj = { name: 'Test3 Category' };
    return categories.create(obj)
      .then(record => {
        record.name = 'Test for update category'
            return categories.update(record._id,record)
            .then(category => {
            return categories.get(category._id)
            .then(category=>{
              // console.log(category)
              Object.keys(obj).forEach(key => {
                expect(category[key]).toEqual(obj[key]);
              });
            })
          });
      });
  });
  it('can delete() a category', () => {
    let obj = { name: 'Test4 Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            return categories.delete(category._id)
            .then(category=>{
              // console.log(category)
              expect(category).toEqual(undefined);
            })
          });
      });
  });
});