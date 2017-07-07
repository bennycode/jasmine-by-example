const moxios = require('moxios');

const MyRequest = require('../../src/main/MyRequest');

describe('MyRequest', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('"getResource"', () => {
    it('get\'s something', (done) => {
      const baseURL = 'http://localhost:8080';

      const responseBody = {"value": "don't hit me!"};
      moxios.stubRequest(`${baseURL}/resource`, {
        status: 200,
        responseText: responseBody
      });

      const request = new MyRequest(baseURL);
      request.getResource()
        .then((response) => {
          expect(response.data.value).toBe('don\'t hit me!');
          done();
        });
    })
  });
});
