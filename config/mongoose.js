// require mongoose 
const mongoose = require('mongoose');
// create connection 
mongoose.connect('mongodb://0.0.0.0/task_list');
const db = mongoose.connection;
db.on('error', function (err) {
    console.log("There was an error connecting to database");
})
db.once('open', function () {
    console.log("Successfully connected to the database");
})