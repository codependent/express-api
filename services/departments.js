var Q = require('q');

exports.getAll = function(){
	return Q.fcall( function(){
		return [ {"name" : "AI"}, {"name" : "Big Data"} ]
	});
}
exports.get = function(departmentId){
	return Q.fcall( function(){
		return {"name" : departmentId};
	});
}