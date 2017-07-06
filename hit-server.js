const MyRequest= require('./src/main/MyRequest');

const baseURL = 'http://localhost:8080';
const request = new MyRequest(baseURL);
request.getResource()
  .then((response) => {
    console.log('Response', response.data);
  })
  .catch((error) => {
    console.error('Error', error);
  });
