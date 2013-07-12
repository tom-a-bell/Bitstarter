var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
//  response.send('Hello World 2!');

// Send the contents of index.html assuming utf8 encoding
  var infile = "index.html";
  var buffer = fs.readFileSync(infile);
  var message = buffer.toString('utf8');
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
