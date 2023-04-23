// require mongoose 
const mongoose = require('mongoose');
// define schema 
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    date: {
        type: String
    }
})
// export schema 
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;