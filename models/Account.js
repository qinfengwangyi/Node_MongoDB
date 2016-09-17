var db = require('../db/dbconnect');

var Schema = db.mongoose.Schema;

var AccountSchema = new Schema({
	id: String,
	username: String,
	password: String,
	createdtime: { type: Date, default: Date.now }
}, {collection: "Account"});


var Account = db.mongoose.model('Account', AccountSchema);
var AccountDAO = function(){};

//list
AccountDAO.prototype.list = function(obj, callback){
	Account.find({}, function(err,list){
		console.log(err, list)
		if(err) return handleError(err);
        callback(err, list);
    });
};

//getAccountByName
AccountDAO.prototype.getAccount = function(name, callback){
	Account.findOne({name:name}, function(err, obj){
		callback(err, obj);
	});
};

//save
AccountDAO.prototype.save = function(name, callback){
	Account.findOne({name:name}, function(err, obj){
		callback(err, obj);
	});
};

module.exports = new AccountDAO();