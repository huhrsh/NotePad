const { model } = require('mongoose');
const Task=require('../models/tasks');
module.exports.home=function(req,res){
    Task.find({})
    .then((taskList)=>{
        return res.render('home',{
            title:'ToDo List',
            taskList:taskList,            
        })
    })
    .catch((err)=>{
        console.log("There was an error in fetching data from db");
        return;
    })
}

module.exports.createTask=function(req,res){
    Task.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    })
    .then((newTask)=>{
        console.log(newTask);
        return res.redirect('/');
    })
    .catch((err)=>{
        console.log("There's an error in creating contact");
        return;
    })
}

module.exports.deleteNote=function(req,res){
    console.log(req.body.id);
    // console.log(req.body.id);
    Task.deleteMany({ _id: { $in: req.body.id } })
    .then((tasksDeleted)=>{
        console.log("The deleted tasks are: ",tasksDeleted);
        return res.redirect('/');
    })
    .catch((err)=>{
        console.log("Error in deleting from database",err);
        return;
    })
}