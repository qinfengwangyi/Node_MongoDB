var Account = require('../models/Account');

exports.getAccount = function(req, res){
	Account.getByName(req.params.name, function(e, obj){
		res.send(obj)
	});
}

exports.list = function(req, res){
	Account.list({}, function(e, list){
		console.log(e)
		res.send(list)
	});
}