var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// all environments
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
})

app.get('/', function(request, response) {
  var page = fs.readFileSync(__dirname + '/index.html');
  response.end(page.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});