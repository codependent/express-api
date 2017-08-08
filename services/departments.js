const Q = require('q');

exports.getAll = () => {
	return Q.fcall( function(){
		return [ {"name" : "AI"}, {"name" : "Big Data"} ]
	});
}
exports.get = (departmentId) => {
	return Q.fcall( function(){
		return {"name" : departmentId};
	});
}