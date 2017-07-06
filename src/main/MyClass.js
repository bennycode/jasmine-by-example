'use strict';

module.exports = class MyClass {
  constructor() {
  }

  getSomething() {
    return Promise.resolve({value: 'something'});
  }
};