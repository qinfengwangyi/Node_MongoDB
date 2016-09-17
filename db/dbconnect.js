const config = require('../config')

// DB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Admin');

mongoose.connection.on('connected', function(){
	console.log('DataBase connected');
});

mongoose.connection.on('error', function(err){
	console.log('DataBase connection Error:' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('DataBase disconnected');
});

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('DataBase disconnected in Termination');
		process.exit(0);
	});
});

exports.mongoose = mongoose;