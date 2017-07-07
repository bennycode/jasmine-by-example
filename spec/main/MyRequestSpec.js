const axios = require('axios');
const sinon = require('sinon');

const MyRequest = require('../../src/main/MyRequest');

describe('MyRequest', () => {
  let sandbox;
  let server;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    server = sandbox.useFakeServer();
  });

  afterEach(() => {
    server.restore();
    sandbox.restore();
  });

  describe('"getResource"', () => {
    it('get\'s something', (done) => {
      const responseBody = {"value": "don't hit me!"};
      const response = Promise.resolve({data: responseBody});
      sandbox.stub(axios, 'request').returns(response);

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
