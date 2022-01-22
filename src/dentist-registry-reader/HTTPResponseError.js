// Code adapted from: https://www.npmjs.com/package/node-fetch#json
// Allows us to create response errors for node-fetch.

class HTTPResponseError extends Error {
    constructor(response, ...args) {
        super(`HTTP Error Response: ${response.status} ${response.statusText}`, ...args);
        this.response = response;
    }
}

module.exports = HTTPResponseError;