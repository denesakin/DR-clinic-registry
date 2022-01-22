// This returns the collection from the database, which will act as input for comparing the database collection data to the online registry data.
async function retreiveCollection(model) {
    let dbCollection = await model.find({}, {_id:0, __v:0}).lean().catch( err => {
        throw err;     
    });
    return dbCollection;
}

module.exports.retreiveCollection = retreiveCollection;