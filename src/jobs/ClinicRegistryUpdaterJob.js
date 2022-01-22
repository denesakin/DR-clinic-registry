const registryReader = require('../dentist-registry-reader/DentistRegistryReader');
const jsonDataComparator = require('../registry-database-handlers/JsonComparator');
const dbUpdater = require('../registry-database-handlers/DbUpdater');
const dbCollectionRetreiver = require('../registry-database-handlers/DbCollectionRetreiver');
const Clinic = require('../mongoose-handler/models/clinics');

// Code was placed here to act as a cron-job, which will execute every minute.
async function runUpdaterJob() {
    await registryReader.readOnlineRegistry().then( async (registry) => {
        let dbClinicData = await dbCollectionRetreiver.retreiveCollection(Clinic);
        if (jsonDataComparator.compareData(dbClinicData, registry)) {
            await dbUpdater.updateDatabase(registry);
            console.log('Updated!');
        } else {
            console.log('same data, no need to update!');
        }
    }).catch(err => {
        throw err;
    });
}

module.exports.runUpdaterJob = runUpdaterJob;