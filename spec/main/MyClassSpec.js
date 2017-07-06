const MyClass = require('../../src/main/MyClass');

describe('MyClass', () => {
  describe('"getSomething"', () => {
    it('get\'s something', (done) => {
      const instance = new MyClass();
      instance.getSomething().then((response) => {
        expect(response.value).toBe('something');
        done();
      });
    })
  });
});
