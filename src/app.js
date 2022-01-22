const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cron = require('node-cron');
const clinicRegistryUpdaterJob = require('./jobs/ClinicRegistryUpdaterJob');

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/db';

app.get('/', (req, res) => {
    res.sendStatus(200);
});


// Calls the different handlers so that the checks and database can be updated based on the data from the online registry
mongoose.connect(mongoUrl) // Allows us to connect to docker MongoDB database
    .then( async () => {
        try {
            await clinicRegistryUpdaterJob.runUpdaterJob(); // This is also called here so that when the system is started, an update check will be made at the start.
            cron.schedule('*/1 * * * *', () => { // Used to schedule a job that occurs every minute
                clinicRegistryUpdaterJob.runUpdaterJob();
            });
        } catch(err) {
            console.error(err);
        }
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});