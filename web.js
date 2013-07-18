var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // Send the contents of index.html assuming utf-8 encoding
  var htmlfile = "index.html";
  var buffer = fs.readFileSync(htmlfile);
  var html = buffer.toString('utf8');
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
