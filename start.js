const app = require('./dist/index.js'); //changed from server.js

app.listen(3002, () => {
  console.log('server is listening on port 3002');
})