var Q = require('q');

exports.getAll = function(){
	return Q.fcall( function(){
		return [ {"name" : "Alice"}, {"name" : "Bob"} ]
	});
}
exports.get = function(uid){
	return Q.fcall( function(){
		return {"name" : uid};
	});
}