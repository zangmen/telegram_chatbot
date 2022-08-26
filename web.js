var express= require('express');
var packageinfo = require('./package.json');
var app = express();
var portservice = process.env.PORT || 5000;

app.get('/', function (req, res) {
	res.json({ 
     name: packageinfo.name,
	   version: packageinfo.version,
     author: packageinfo.author,
     license: packageinfo.license,
     repository: packageinfo.repository.url,
     bugs: packageinfo.bugs.url,
     homepage: packageinfo.homepage
	});
  
});

var server=app.listen(portservice, function() {
  var port = server.address().port;
  /*CLI下回應己啟動*/
  console.log("Telegram Chat Bot Server is start running ......");
  console.log("IP Address: http://[your_IP]:%s",port);
});
