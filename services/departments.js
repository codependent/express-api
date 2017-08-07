exports.getAll = function(){
	return [ {"name" : "AI"}, {"name" : "Big Data"} ];
}

exports.get = function(departmentId){
	return {"name" : departmentId};
}