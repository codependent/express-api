const Q = require('q');
const Client = require('node-rest-client').Client;
const client = new Client();

var args = {
	headers: { "Accept": "application/json", "Content-Type": "application/json" }
};


exports.getAll = () => { 
	var deferred = Q.defer();
	client.get("https://swapi.co/api/people", args, (data, response) => {
		deferred.resolve(data);
	});	
	return deferred.promise;
}

exports.get = (uid) => { 
	var deferred = Q.defer();
	client.get("https://swapi.co/api/people/"+uid, args, (data, response) => {
		deferred.resolve(data);
	});
	return deferred.promise;
}
