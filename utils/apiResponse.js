

exports.ReturnJson = function(res, err, obj){
	res.type('application/json');
	if(err){
		res.status(500).send({
			status: 500,
			data: null,
			msg: err
		});
	}
	if(obj == null || obj == undefined){
		res.status(404).send({
			status: 404,
			data: null,
			msg: '未找到资源'
		});
	}else{
		res.status(200).send({
			status: 200,
			data: obj,
			msg: ''
		});
	}
}