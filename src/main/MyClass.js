const axios = require('axios');

module.exports = class MyClass {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getSomething() {
    const config = {
      method: 'get',
      url: `${this.baseURL}/resource`
    };

    return axios.request(config);
  }
};
