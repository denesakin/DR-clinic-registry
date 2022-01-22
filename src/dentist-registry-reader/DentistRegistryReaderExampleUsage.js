let getDentistRegistry = require('./DentistRegistryReader.js');

// Provides example usage of accessing the json data.
getDentistRegistry().then(registry => {
    console.log(registry[0]);
    console.log(registry[3].coordinate);
    console.log('\nAll: \n');
    console.log(registry);
}).catch(err => {
    console.log(err);
});
