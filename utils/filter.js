var config = require('../config');
var AuthTokenService = require('../controllers/authToken');

exports.Filter = function(req, res, next){
	var url = req.originalUrl;
	var token = req.query[config.access_token] || req.headers[config.access_token];
	var data = {
		status: 406,
		data: null,
		msg: '校验失败'
	};
	if(url == '/' || url == '/login'){
		next();//不需校验
	}else{
		if(token == null || token == undefined){
			return res.status(406).send(data);
		}
		else{
			//数据库中匹配
			AuthTokenService.getAuthToken(token, res, function(obj){
				if(!obj){
					return res.status(406).send(data);
				}else{
					next();
				}
			});
			
		}
	}
}