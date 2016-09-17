var User = require('../models/Users'),
	apiResponse = require('../utils/apiResponse');


exports.addUser = function(req, res){
	console.log(req, res);
	var json = req.body.content;
	console.log(json)
}


exports.getUser = function(req, res){
	User.getByName(req.params.name, function(err, obj){
		console.log('users.js params:', req.params)
		console.log('users.js query:', req.query);
		apiResponse.ReturnJson(res, err, obj);
	});
}