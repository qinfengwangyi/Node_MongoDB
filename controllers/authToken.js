var AuthToken = require('../models/AuthToken'),
	apiResponse = require('../utils/apiResponse');


exports.addAuthToken = function(req, res){
	console.log(req, res);
	var json = req.body.content;
	console.log(json)
}


exports.getAuthToken = function(id, res, cb){
	AuthToken.getById(id, function(err, obj){
		cb(obj)
	});
}