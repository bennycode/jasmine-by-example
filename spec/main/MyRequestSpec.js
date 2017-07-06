const MyRequest = require('../../src/main/MyRequest');

describe('MyRequest', () => {
  describe('"getResource"', () => {
    it('get\'s something', (done) => {
      const baseURL = 'http://localhost:8080';
      const request = new MyRequest(baseURL);
      request.getResource()
        .then((response) => {
          expect(response.data.value).toBe('don\'t hit me!');
          done();
        });
    })
  });
});
