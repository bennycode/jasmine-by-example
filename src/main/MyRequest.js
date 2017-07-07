const axios = require('axios');

module.exports = class MyRequest {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getResource() {
    return axios.get(`${this.baseURL}/resource`);
  }
};
