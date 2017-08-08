const Q = require('q');

exports.getAll = () => {
	return Q.fcall( function(){
		return [ {"name" : "Alice"}, {"name" : "Bob"} ]
	});
}
exports.get = (uid) => {
	return Q.fcall( function(){
		return {"name" : uid};
	});
}