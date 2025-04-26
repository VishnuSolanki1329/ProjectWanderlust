<<<<<<< HEAD
class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

=======
class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

>>>>>>> 59f73547b03df34273dfaa7c6d4455c0c0482eb2
module.exports = ExpressError;