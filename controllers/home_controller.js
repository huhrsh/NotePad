// requiring mongoose 
const mongoose = require('mongoose');
// requiring schema 
const Task = require('../models/tasks');
// creating individual functions and exporting them 
module.exports.home = function (req, res) {
    Task.find({})
        // if successful, then 
        .then((taskList) => {
            return res.render('home', {
                title: 'ToDo List',
                taskList: taskList,
            })
        })
        // if error, then 
        .catch((err) => {
            console.log("There was an error in fetching data from db");
            return;
        })
}

module.exports.createTask = function (req, res) {
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    })
        // if successful, then 
        .then((newTask) => {
            console.log("The tast created was: ", newTask);
            return res.redirect('/');
        })
        // if error, then 
        .catch((err) => {
            console.log("There's an error in creating contact");
            return;
        })
}

module.exports.deleteNote = function (req, res) {
    // console.log(req.body.id);
    Task.deleteMany({ _id: { $in: req.body.id } })
        // if successful, then 
        .then((tasksDeleted) => {
            console.log("The required tasks were deleted, status: ", tasksDeleted);
            return res.redirect('/');
        })
        // if error, then 
        .catch((err) => {
            console.log("Error in deleting from database:", err);
            return;
        })
}