// Used to compare two json objects.
function clinicDataComparator(databaseRegistryData, dentistRegistryData) {
    try {
        let shouldUpdate = false;
        if (!databaseRegistryData.length || JSON.stringify(databaseRegistryData) !== JSON.stringify(dentistRegistryData)) {
            shouldUpdate = true;
        }
        return shouldUpdate;
    } catch(err) {
        throw err;
    }
}

module.exports.compareData = clinicDataComparator;