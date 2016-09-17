var db = require('../db/dbconnect');

var Schema = db.mongoose.Schema;

var AuthTokenSchema = new Schema({
	// _id: String,
	id: String,
	name: String,
	createdtime: { type: Date, default: Date.now },
	updatetime: { type: Date, default: Date.now }
}, {collection: 'AuthToken'});


var AuthToken = db.mongoose.model('AuthToken', AuthTokenSchema);

var AuthTokenDAO = function(){};

//save
AuthTokenDAO.prototype.save = function(obj, callback){
	var model = new AuthToken(obj);
	model.save(function(e){
		callback(e);
	});
};

//update
AuthTokenDAO.prototype.update = function(obj, callback){
	var model = new AuthToken(obj);
	model.save(function(e){
		callback(e);
	});
};

//getTokenById
AuthTokenDAO.prototype.getById = function(id, callback){
	AuthToken.findOne({_id: id}, function(e, obj){
		callback(e, obj);
	});
};

module.exports = new AuthTokenDAO();