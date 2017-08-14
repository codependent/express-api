const Q = require('q');
const Rx = require('rxjs/Rx');
const Client = require('node-rest-client').Client;
const client = new Client();

var args = {
	headers: { "Accept": "application/json", "Content-Type": "application/json" }
};

exports.getAll = () => { 
	return httpGet("https://swapi.co/api/people", args);
}

exports.get = (uid) => { 
	return httpGet("https://swapi.co/api/people/"+uid, args);
}

exports.getFilms = (uid) => { 

	var deferred = Q.defer();
	var observables = [];
	var toReturn;

	httpGet("https://swapi.co/api/people/"+uid, args)
	.then( (data) => {
		toReturn = data;
		data.films.forEach(function (filmsIt){
			var observable = Rx.Observable.defer(function () {
				return httpGet(filmsIt, args);		
  			});
  			observables.push(observable);
		});
		var observableFinal = Rx.Observable.zip(...observables, function() {
			toReturn.films = arguments;
			return arguments;
		}).subscribe(
		    (x) => {},
		    (err) => {console.log('Error: ' + err);},
		    () => {
		        deferred.resolve(toReturn);
		    });
	});		
	return deferred.promise;
}

function httpGet(url, args){
	var deferred = Q.defer();
	console.log("Calling " + url);
	client.get(url, args, (data, response) => {
		console.log("Got " + url);
		deferred.resolve(data);
	});
	return deferred.promise;
}