// Note: code adapted from: https://www.npmjs.com/package/node-fetch#json
// Reading json file was put in module so that it can be imported when needed

// node-fetch library was used to retreive json data from a webpage
let fetch = require('node-fetch');
let HTTPResponseError = require('./HTTPResponseError');

// Helper function to ensure that our dentist registry response has not 4xx or 5xx errors
function checkStatus(res) {
    if (res.ok) {
        return res;
    } else {
        throw new HTTPResponseError(res);
    }
}

async function getDentistRegistry() {
    const jsonUrl = 'https://raw.githubusercontent.com/feldob/dit355_2020/master/dentists.json';
    try {
        const response = await fetch(jsonUrl);
        await checkStatus(response);
        const dentistRegistry = await response.json();
        return dentistRegistry.dentists;
    } catch (err) {
        throw err;
    }
}

module.exports.readOnlineRegistry = getDentistRegistry;