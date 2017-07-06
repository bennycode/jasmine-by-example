const axios = require('axios');

module.exports = class MyRequest {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getResource() {
    const config = {
      method: 'get',
      url: `${this.baseURL}/resource`
    };

    return axios.request(config);
  }
};
