const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('/api', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Server is running"}');
});

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
