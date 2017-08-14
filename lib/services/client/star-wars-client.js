const Q = require('q');
const Rx = require('rxjs/Rx');
const Client = require('node-rest-client').Client;
const HttpError = require('./http-error');
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
		data.films.forEach(function (filmsIt){
			var observable = Rx.Observable.defer( () => {
				return httpGet(filmsIt, args);
			});
  			console.log("pushing")
  			observables.push(observable);
		});
		var observableFinal = Rx.Observable.zip(...observables, function() {
			toReturn = Array.prototype.slice.call(arguments);;
			return toReturn;
		}).subscribe(
		    (x) => {},
		    (err) => {console.log('Error: ' + err);},
		    () => {
		        deferred.resolve(toReturn);
		    });
	},
	(error) => {
		deferred.reject(error);
	}
	);		
	return deferred.promise;
}

function httpGet(url, args){
	console.time("httpGet Time -> " + url);
	var deferred = Q.defer();
	console.log("Calling " + url);
	client.get(url, args, (data, response) => {
		if( response.statusCode >= 400 && response.statusCode <= 599 ){
			deferred.reject(new HttpError(response.statusCode, data));
		}else{
			deferred.resolve(data);
		}	
		console.timeEnd("httpGet Time -> " + url);
		deferred.resolve(data);
	});
	return deferred.promise;
}