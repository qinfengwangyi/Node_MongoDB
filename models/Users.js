var db = require('../db/dbconnect');

var Schema = db.mongoose.Schema;

var UserSchema = new Schema({
	// _id: String,
	id: String,
	name: String,
	age: String
}, {collection: 'Users'});


var User = db.mongoose.model('Users', UserSchema);

var UserDAO = function(){};

//save
UserDAO.prototype.save = function(obj, callback){
	var model = new User(obj);
	model.save(function(e){
		callback(e);
	});
};

//getUserByName
UserDAO.prototype.getByName = function(name, callback){
	User.findOne({name:name}, function(e, obj){
		callback(e, obj);
	});
};

module.exports = new UserDAO();