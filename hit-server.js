const MyClass = require('./src/main/MyClass');

const baseURL = 'http://localhost:8080';
const instance = new MyClass(baseURL);
instance.getSomething()
  .then((response) => {
    console.log('Response', response.data);
  })
  .catch((error) => {
    console.error('Error', error);
  });
