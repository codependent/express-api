const starWarsClient = require('./client/star-wars-client');

exports.getAll = () => {
	return starWarsClient.getAll()
}
exports.get = (uid) => {
	return starWarsClient.get(uid);
}