const axios = require('axios');

module.exports = class MyRequest {
  static get URL() {
    return {
      RESOURCE: '/resource',
    };
  }

  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getResource() {
    const config = {
      method: 'get',
      url: `${this.baseURL}${MyRequest.URL.RESOURCE}`
    };

    return axios.request(config);
  }
};
