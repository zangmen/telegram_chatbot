var express= require('express');
var packageinfo = require('./package.json');
var app = express();

var portservice = process.env.PORT || 5000;

app.get('/', function (req, res) {
	res.json({ 
	   version: packageinfo.version
	});
});

var server=app.listen(portservice, function() {
  var host_ip = server.address().address;
  var port = server.address().port;
  console.log("Web Server started at http://%s:%s",host_ip,port);
});
