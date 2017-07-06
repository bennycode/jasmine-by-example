const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/resource', function (request, response) {
  const responseBody = {"value": "don't hit me!"};
  console.log(responseBody);
  response.json(responseBody);
});

app.listen(port, () => {
  console.log(`Server is running on port "${port}".`);
});
