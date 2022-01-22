const Clinic = require('../mongoose-handler/models/clinics');
const mongoose = require('mongoose');

// As the updater will store a new collection, the previous collection is removed so that it can be replaced.
async function deletePreviousData() {
    await mongoose.connection.db.dropCollection('clinics');
}

async function updateDatabase(newRegistryData) {
    try {
        await deletePreviousData();
        await Clinic.insertMany(newRegistryData);
    } catch(err) {
        throw err;
    }
}

module.exports.updateDatabase = updateDatabase;