exports.getAll = function(){
	return [ {"user" : "Alice"}, {"user" : "Bob"} ];
}

exports.get = function(uid){
	return {"name" : uid};
}