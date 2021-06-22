var expres= require('expres');
var packageinfo = require('./package.json');
var app = expres();

var postservice = process.env.PORT || 5000;

app.get('/', function (req, res) {
	var options = {
        root: __dirname,    
		headers: { "Content-Type": "text/html"}
	}
	res.sendFile('index.html',options, function(error){
		if(error){
			console.log('Sent failed:', 'index.html' + error);
		}else{
			console.log('Sent sucess:', 'index.html');
		}
	});
	res.json({ version: packageInfo.version });
});

app.listen(portservice, function() {
  var host_ip = server.address().address;
  var port = server.address().port;
  console.log("Web Server started at http://%s:%s",host_ip,port);
});
