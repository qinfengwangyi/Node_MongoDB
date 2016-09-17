var express = require('express'),
	http = require('http'),
	config = require("./config"),
	mongoCon = require('./db/dbconnect'),
	router = require('./routes/router');

//express
var app = express();

router.setRequestUrl(app);


//test
app.get('/imgs', function(req, res){
	res.sendStatus(200);
	// try{
	// 	var a = 1, b= 0;
	// 	var c = a/b;
	// 	res.status(500).send(c);
	// }catch(e){
	// 	res.status(500).send(e);
	// }

	// var options = {
	//     root: __dirname + '/public/images/',
	//     dotfiles: 'deny',
	//     headers: {
	//         'x-timestamp': Date.now(),
	//         'x-sent': true
	//     }
 //  	};
 //  	var fileName = req.params.name;
 //  	res.sendFile(fileName, options, function (err) {
	//     if (err) {
	// 		console.log(err);
	// 		res.status(err.status).end();
	//     }
	//     else {
	// 		console.log('Sent:', fileName);
	//     }
 //  	});

	// res.set('Content-Type', 'image/png');
  	// res.attachment('public/images/qq.png');

  	// res.status(404).send('Sorry, we cannot find that!');
});

app.put('/put', function(req, res){
	console.log(req.params);
	console.log(req.headers);
	res.status(200).send('This is put Method.');
});
app.on('close', function(errno) {
	mongoCon.disconnect(function(err) {
		console.log(err)
	});
});

app.set({
	'title': 'Node Application',
	'x-powered-by': false,
	'trust proxy': function (ip) {
		console.log(ip)
	    if (ip === '127.0.0.2' || ip === '123.123.123.123')
	    	return true;
	    else
	    	return false;
	},
	'etag': function (body, encoding) {
		console.log(body, encoding)
		return generateHash(body, encoding); // consider the function is defined
  	}
});

app.listen(config.port, function(){
	console.log('Listen port:'+config.port)
});