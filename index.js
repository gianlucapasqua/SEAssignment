var request = require('request');

request('https://private-10d1de-assignment16.apiary-mock.com/questions', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
