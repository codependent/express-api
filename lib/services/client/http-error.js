class HttpError extends Error {
	
	constructor(statusCode, data) {
		super("HttpError");
        this.statusCode = statusCode;
        this.data = data;
    }

}

module.exports = HttpError;